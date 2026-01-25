"use client";

import mapboxgl from "mapbox-gl";
import { useEffect, useRef, useState } from "react";
import "./storeMap.scss";

// DATA
import { STORE_LOCATION } from "~/data/storeMap";
import type { StoreMap } from "./StoreMap.type";

// COMPONENT
import { StoreLocationCard } from "~/components/features/StoreLocationCard/storeLocationCard";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN as string;

export default function StoreMapPage(): JSX.Element {
	const mapContainerRef = useRef<HTMLDivElement | null>(null);
	const mapRef = useRef<mapboxgl.Map | null>(null);
	const markersRef = useRef<{ [key: string]: mapboxgl.Marker }>({});

	const openGoogleMaps = (store: StoreMap) => {
		const url = `https://www.google.com/maps/dir/?api=1&destination=${store.lat},${store.lng}`;
		window.open(url, "_blank");
	};

	const findNearestStore = () => {
		if (!navigator.geolocation) return;

		navigator.geolocation.getCurrentPosition((position) => {
			const { latitude, longitude } = position.coords;

			let nearestStore = STORE_LOCATION[0];
			let minDistance = Number.POSITIVE_INFINITY;

			STORE_LOCATION.forEach((store) => {
				const dist = Math.sqrt(
					Math.pow(store.lat - latitude, 2) +
						Math.pow(store.lng - longitude, 2),
				);
				if (dist < minDistance) {
					minDistance = dist;
					nearestStore = store;
				}
			});

			handleFocusStore(nearestStore);
		});
	};

	useEffect(() => {
		if (!mapContainerRef.current) return;

		const map = new mapboxgl.Map({
			container: mapContainerRef.current,
			style: "mapbox://styles/mapbox/streets-v12",
			center: [106.7004238, 10.7756587],
			zoom: 10,
		});

		map.on("load", () => map.resize());
		mapRef.current = map;

		STORE_LOCATION.forEach((store: StoreMap) => {
			const popupEl = document.createElement("div");
			popupEl.className =
				"w-64 rounded-lg overflow-hidden shadow-xl bg-white border border-gray-100";
			popupEl.innerHTML = `
  <img src="${store.image}" class="w-full h-28 object-cover" alt="${store.name}" />
  <div class="p-3">
    <h4 class="font-bold text-sm text-gray-900">${store.name}</h4>
    <p class="text-[11px] text-gray-500 mt-1 line-clamp-2">${store.address}</p>
    <button id="btn-maps-${store.id}" class="w-full mt-3 bg-accent-600-hover text-white text-xs py-2 rounded flex items-center justify-center gap-1 hover:bg-accent-700 transition-colors">
       Google Maps
    </button>
  </div>
`;

			popupEl
				.querySelector(`#btn-maps-${store.id}`)
				?.addEventListener("click", () => openGoogleMaps(store));

			const popup = new mapboxgl.Popup({
				offset: 15,
				closeButton: true,
				anchor: "bottom",
			}).setDOMContent(popupEl);

			const marker = new mapboxgl.Marker({ color: "#E11D48" })
				.setLngLat([store.lng, store.lat])
				.setPopup(popup)
				.addTo(map);
			markersRef.current[store.id] = marker;
		});

		return () => {
			mapRef.current?.remove();
		};
	}, []);

	const handleFocusStore = (store: StoreMap): void => {
		if (!mapRef.current) return;
		mapRef.current.flyTo({
			center: [store.lng, store.lat],
			zoom: 15,
			essential: true,
		});

		const marker = markersRef.current[store.id];
		if (marker) {
			const activePopups = document.getElementsByClassName("mapboxgl-popup");
			while (activePopups[0]) activePopups[0].remove();
			marker.togglePopup();
		}
	};

	return (
		<div className="lg:w-10/12 w-11/12 mx-auto lg:py-10  py-5">
			<div className="  mb-2">
				<h1 className="text-2xl lg:text-3xl font-bold text-accent-600">
					Hệ Thống Cửa Hàng
				</h1>
				<p className="text-gray-500 text-sm mb-6">Hệ thống cửa hàng Yejara.</p>
			</div>
			<div className="flex flex-col lg:grid lg:grid-cols-12  mx-auto gap-0 lg:gap-6 h-screen lg:h-auto overflow-x-hidden">
				<div className="order-2 lg:order-1 col-span-12 lg:col-span-5 lg:px-4 py-6 lg:p-0   z-10">
					<div className="flex flex-col gap-4 overflow-y-auto max-h-[45vh] lg:max-h-[600px] custom-scroll-x pr-1">
						{STORE_LOCATION.map((store) => (
							<div key={store.id} className="relative group">
								<div
									onClick={() => handleFocusStore(store)}
									className="cursor-pointer transform transition-all active:scale-95"
								>
									<StoreLocationCard
										name={store.name}
										image={store.image}
										openTime={store.openTime}
										address={store.address}
										phone={store.phone}
									/>
								</div>
								<button
									onClick={(e) => {
										e.stopPropagation();
										openGoogleMaps(store);
									}}
									className="absolute bottom-4 right-4 bg-white/90 p-2 rounded-full shadow-md bg-accent-600-hover  transition-all lg:opacity-0 group-hover:opacity-100"
									title="Mở Google Maps"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="18"
										height="18"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<polyline points="15 3 21 3 21 9" />
										<line x1="10" y1="14" x2="21" y2="3" />
										<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
									</svg>
								</button>
							</div>
						))}
					</div>
				</div>

				<div className="order-1 lg:order-2 col-span-12 lg:col-span-7 h-[40vh] lg:h-[600px]  !sticky top-0 lg:relative border-b lg:border-none">
					<div ref={mapContainerRef} className="w-full h-full rounded-2xl" />
					<button
						onClick={findNearestStore}
						className="flex items-center absolute bottom-4 right-4 gap-1 text-xs font-semibold bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-full transition-all text-gray-700"
					>
						📍 Tìm cửa hàng gần nhất
					</button>
				</div>
			</div>
		</div>
	);
}
