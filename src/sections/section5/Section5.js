import React, { Component } from "react";
import "./Section5.css";
import images from "../../assets/sec4.jpg";
import { ArrowRight } from "react-bootstrap-icons";
import bg from "../../assets/map1.png";
import bg2 from "../../assets/map2.png";
import bg3 from "../../assets/map3.png";
import bg4 from "../../assets/map5.png";
import bg5 from "../../assets/map6.png";
import rec1 from "../../assets/rec1 (1).png";
import rec2 from "../../assets/rec1 (2).png";

class Section5 extends Component {
	render() {
		return (
			<div className="bg-sec5">
				<div className="bg-img-custom">
					<div className="contact">
						<div className="listed col-md-12">
							<div className="col-md-6 h-100 pd-2">
								<span className="text-1">
									Amazing To Do App adalah perusahaan yang
									bergerak dalam pengembangan aplikasi to do
									list untuk memudahkan pengguna dalam
									mengatur kebutuhan catatan harian.
									<br />
									Pengalaman kami didasari oleh research dan
									beberapa fakta lapangan yang menjadikan
									produk kami lebih unggul dibandingkan produk
									yang lain.
								</span>
							</div>
							<div className="col-md-2 h-100 pd-2 d-flex flex-column tx-custom">
								<span>PERUSAHAAN</span>
								<span>Tentang Perusahaan</span>
								<span>Tentang Kami</span>
								<span>Penelitian</span>
								<span>Konsultasi</span>
								<span>Karir</span>
							</div>
							<div className="col-md-2 h-100 pd-2 d-flex flex-column tx-custom">
								<span>TIM AHLI</span>
								<span>Tim Kami</span>
							</div>
							<div className="col-md-2 h-100 pd-2 d-flex flex-column tx-custom">
								<span>KONTAK</span>
								<span>Hubungi Kami</span>
								<span>Lokasi Kami</span>
								<span>Sosial Media</span>
							</div>
						</div>
					</div>
					<img src={images} alt="sec4" />
					<div className="bg-abs-top">
						<div className="card-form">
							<div className="form-wrap">
								<span className="text-title-4">
									{" "}
									Tertarik Untuk Mencoba? Kirimkan Kami Pesan{" "}
								</span>
								<span className="sub-title-4">
									Jika anda punya pertanyaan mengenai aplikasi
									kami, anda dapat kirim pesan melalui form di
									bawah.
								</span>
							</div>
							<div className="form-send">
								<div className="top-form">
									<div className="col-md-6 d-flex flex-column">
										<div>
											<span className="form-title">
												NAMA LENGKAP
											</span>
											<input
												placeholder="Nama Anda?"
												type="text"
												className="form-control-custom-4"
											/>
										</div>
										<div>
											<span className="form-title">
												ALAMAT EMAIL
											</span>
											<input
												placeholder="Masukkan email valid anda"
												type="text"
												className="form-control-custom-4"
											/>
										</div>
									</div>
									<div className="col-md-6 pad-4">
										<div className="d-flex flex-column h-100">
											<span className="form-title">
												PESAN ANDA
											</span>
											<textarea
												placeholder="Ceritakan pertanyaan anda"
												type="text"
												className="textarea-custom-4"
											/>
										</div>
									</div>
								</div>
								<div className="btm-form">
									<div className="btn-send-4">
										<span>Kirim</span>
										<ArrowRight />
									</div>
								</div>
							</div>
						</div>
						<div className="bg-right-4">
							<img src={bg} alt="bg" />
							<img src={bg2} alt="bg2" />
							<img src={bg3} alt="bg3" />
							<img src={bg4} alt="bg4" />
							<img src={bg5} alt="bg5" />
							<img src={rec1} alt="rec1" />
							<img src={rec2} alt="rec2" />
						</div>
					</div>

					<div className="footer">
						<div className="f-content">
							<hr className="hr-custom" />
							<div className="f-text">
								<div className="col-md-6 h-100 d-flex flex-column">
									<span>Amazing To Do App</span>
									<span>Copyright &copy; 2020</span>
								</div>
								<div className="col-md-6 h-100 ">
									<div className="w-50 d-flex flex-row"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Section5;
