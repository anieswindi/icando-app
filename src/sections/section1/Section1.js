import React, { Component } from "react";
import "./Section1.css";
import dd from "../../assets/dd.jpg";
import { ArrowRight } from "react-bootstrap-icons";

class Section1 extends Component {
	render() {
		return (
			<div className="bg-custom-sec">
				<div className="d-box">
					<img src={dd} alt="image-1" />
					{/* <div className="c-box-sticky">
						<span>TENTANG</span>
						<span>KENAPA TO DO APP?</span>
						<span>DEMO SEDERHANA</span>
						<span>TESTIMONI</span>
						<span>KONTAK</span>
					</div> */}
					<div className="t-box">
						<h1>Mudahkan Pencatatan Agenda Harianmu</h1>
						<span>
							Dengan "to do" app, semua yang akan anda kerjakan
							akan selalu ada dalam genggaman smartphone anda.
							Tingkatkan produktivitas harian anda.
						</span>
						<div className="btn-to-do">
							<div className="d-flex flex-row justify-content-center">
								<span>Pelajari Selengkapnya</span>
								<ArrowRight />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Section1;
