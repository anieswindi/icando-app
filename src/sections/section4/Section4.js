import React, { Component } from "react";
import "./Section4.css";
import avatar1 from "../../assets/avatar1.png";
import avatar2 from "../../assets/avatar2.png";
import avatar3 from "../../assets/avatar3.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SampleNextArrow = (props) => {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style, display: "block"}}
			onClick={onClick}
		/>
	);
};

const SamplePrevArrow = (props) => {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style, display: "block" }}
			onClick={onClick}
		/>
	);
};
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
					avatar: avatar3,
					address: "Papua",
					testimoni:
						"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
				},
				{
					id_testimoni: 3,
					name: "Ana Aisyah",
					avatar: avatar1,
					address: "Papua",
					testimoni:
						"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
				},
				{
					id_testimoni: 4,
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
		const settings = {
			dots: true,
			slidesToShow: 2,
			slidesToScroll: 2,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />,
		};

		let slide = this.state.testimonies.map((testimoni, index) => {
			return (
				<div className="card-item-slider" key={`testimoni-${index}`}>
					<div className="img-ava">
						<img src={testimoni.avatar} alt="ava" />
					</div>
					<span className="content-txt">{testimoni.testimoni}</span>
					<span className="content-name">{testimoni.name}</span>
					<span className="content-add">{testimoni.address}</span>
				</div>
			);
		});
		return (
			<div className="bg-sec4">
				<span className="text-title-2">Testimoni Pengguna</span>

				<div className="btm-ctn" id="slider-custom">
					<Slider {...settings} className="slider-cust">
						{slide}
					</Slider>
				</div>
			</div>
		);
	}
}

export default Section4;
