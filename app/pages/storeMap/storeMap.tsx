//Data
import { STORE_LOCATION } from "~/data/storeMap"
export default function StoreMapPage() {
    return (
        <div className="grid grid-cols-12 lg:w-10/12 w-11/12 mx-auto py-5">
            <div className="col-span-5">
                <h1 className="text-3xl font-bold text-accent-600">Hệ Thống Cửa Hàng</h1>
                <p className="text-muted">Hệ thống cửa hàng Yejara.</p>
                <div className="flex flex-col gap-3 overflow-y-auto scroll-x-hidden custom-scroll-x 
                mt-5 h-[30rem] ">
                  {STORE_LOCATION.map((s, index) =>(
                      <div className="bg-white flex-shrink-0 shadow rounded-xl grid grid-cols-4 gap-3 overflow-hidden p-3">
                          <div className="overflow-hidden col-span-2 rounded-xl h-[10rem]">
                              <img src={`/assets/images/${s.image}`} alt="" className="w-full h-full" />
                          </div>
                          <div className="col-span-2 flex flex-col justify-between">
                             <h1 className="font-bold line-clamp-2 text-primary-600">{s.name}</h1>
                             <p className="text-muted">{s.openTime}</p>
                             <p className="text-muted line-clamp-3">{s.address}</p>
                             <p className="text-accent-600 font-bold">Sdt: {s.phone}</p>
                          </div>
                      </div>
                  ))}
                   

                </div>

            </div>
            <div className="col-span-7"></div>
        </div>
    )
}