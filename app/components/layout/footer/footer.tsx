import { Link } from "react-router";
import logo from "/assets/images/logo-light.png";
import map from "/assets/images/Icon/map.png";
import phone from "/assets/images/Icon/phone.png";
import email from "/assets/images/Icon/email.png";
import { LINK_DATA } from "./footer.data";
import { Button } from "~/components/UI/ButtonIcon/buttonIcon";

export const Footer = () => {
    return (
        <footer className="bg-primary-700 text-white py-10 p">
            <div className="w-11/12 lg:w-10/12 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

                    <div className="lg:col-span-2 flex flex-col gap-3">
                        <img src={logo} alt="Yejara" className="w-40" />

                        <h1 className="font-semibold text-lg">Giới thiệu</h1>

                        <p className="text-justify text-muted text-sm leading-relaxed">
                            Chúng tôi chính thức mở cửa bán key phần mềm giá rẻ tại Việt Nam nhằm
                            tạo điều kiện cho mọi người dân trong nước được trải nghiệm sử dụng
                            phần mềm chính hãng.
                        </p>

                        <h1 className="text-accent-600 font-bold">
                            Yejara | Cửa hàng phụ kiện giá rẻ
                        </h1>

                        <div className="flex flex-col gap-2 text-sm">
                            <div className="flex gap-2 items-start">
                                <img src={map} alt="" className="mt-1" />
                                <p>Xã Thường Phước, phường Hồng Ngự, tỉnh Đồng Tháp</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <img src={phone} alt="" />
                                <p>0337 019 197</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <img src={email} alt="" />
                                <p>Duyenktb1410@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-3 flex flex-col gap-6">

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-muted">

                            <div className="flex flex-col gap-2">
                                {LINK_DATA.filter(f => f.slug).map(f => (
                                    <Link
                                        key={f.slug}
                                        to={`/${f.slug}`}
                                        className="hover:text-white hover:underline w-fit"
                                    >
                                        {f.link}
                                    </Link>
                                ))}
                            </div>

                            <ul className="col-span-2 text-muted list-disc list-inside">
                                <span className="sm:col-span-1 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    {LINK_DATA.filter(f => !f.slug).map((f, index) => (
                                        <li className="hover:text-white w-fit">{f.link}</li>
                                    ))}
                                </span> </ul>

                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button variant="outline">
                                Xem thông tin về Yejara
                            </Button>
                            <Button variant="outline">
                                Tìm sản phẩm
                            </Button>
                        </div>

                    </div>

                </div>
            </div>
        </footer>

    );
}