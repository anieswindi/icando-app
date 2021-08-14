import React, { Component } from "react";
import "./Section4.css";
import avatar1 from "../../assets/avatar1.png";
import avatar2 from "../../assets/avatar2.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Section4 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			testimonies: [
				{
					id_testimoni: 0,
					name: "Elsa Nurulwati",
					address: "Bandung",
					avatar: avatar1,
					testimoni:
						"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
				},
				{
					id_testimoni: 1,
					name: "Jack Froze",
					address: "Jakarta",
					avatar: avatar2,
					testimoni:
						"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
				},
				{
					id_testimoni: 2,
					name: "Ana Aisyah",
					avatar: avatar2,
					address: "Papua",
					testimoni:
						"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
				},
			],
		};
	}
	render() {
		return (
			<div className="bg-sec4">
				<span className="text-title-2">Testimoni Pengguna</span>

				<div className="btm-ctn">
					{this.state.testimonies.map((testimoni, index) => {
						return (
							<div
								className="card-item-slider"
								key={`testimoni-${index}`}
							>
								<div className="img-ava">
									<img src={testimoni.avatar} alt="ava" />
								</div>
								<span className="content-txt">
									{testimoni.testimoni}
								</span>
								<span className="content-name">
									{testimoni.name}
								</span>
								<span className="content-add">
									{testimoni.address}
								</span>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

export default Section4;
