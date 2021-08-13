import React, { Component } from "react";
import "./Section2.css";
import icon1_p1 from "../../assets/sec2_icon1.png";
import icon2_p2 from "../../assets/sec2_icon2.png";
import icon3_p3 from "../../assets/sec3_icon3.png";
import icon4_p4 from "../../assets/sec4_icon4.png";

import num1_p1 from "../../assets/1.png";
import num2_p2 from "../../assets/2.png";
import num3_p3 from "../../assets/3.png";
import num4_p4 from "../../assets/4.png";


import bg from "../../assets/sec_2.png"

class Section2 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			reasons: [
				{
					id: 0,
					content: {
						title: "Mudah Digunakan.",
						subtitle:
							"Dirancang dengan berdasarkan pengalaman yang ada. Kami menyajikan penggunaan aplikasi yang friendly dan sangat mudah digunakan. Cukup tulis, hapus, edit apa yang anda inginkan dan dengan sekejap akan membantu kehidupan anda.",
						icon: icon1_p1,
						number: num1_p1,
					},
				},
				{
					id: 1,
					content: {
						title: "Desain Menarik.",
						subtitle:
							"Anda tidak perlu khawatir dengan kejenuhan menggunakan aplikasi ini. Tampilan yang menarik akan terus membuat anda jatuh cinta dalam mengorganisir kegiatan anda sehari-hari.",
						icon: icon2_p2,
						number: num2_p2,
					},
				},
				{
					id: 2,
					content: {
						title: "Tersedia Untuk Seluruh Dunia.",
						subtitle:
							"Aplikasi kami dapat diakses di manapun, dan kapanpun anda berada di belahan dunia manapun.",
						icon: icon3_p3,
						number: num3_p3,
					},
				},
				{
					id: 3,
					content: {
						title: "Customer Support Super.",
						subtitle:
							"Kendala apapun itu, tim customer support kami akan senantiasa membantu anda dengan pelayanan yang ramah dan bersahabat.",
						icon: icon4_p4,
						number: num4_p4,
					},
				},
			],
		};
	}
	render() {
		let items = this.state.reasons.map((reason, index) => {
			return (
				<div className="items" key={`items-${index}`}>
					<div className="alt-img">
						<img src={reason.content.icon} alt="icons" />
						<img src={reason.content.number} alt="num" />
					</div>
					<span className="title-sec2">{reason.content.title}</span>
					<span className="sub-title-sec2">
						{reason.content.subtitle}
					</span>
				</div>
			);
		});
		return (
			<div className="bg-sec-2">
				<div className="img-in">
					<img src={bg} alt="bg-img" />
				</div>
				<div className="bg-abs">
					<div className="text-title">
						<div className="center-tx">
							<span>Kenapa Menggunakan TO DO App?</span>
						</div>
					</div>
					<div className="card-content">
						<div className="grid-items">{items}</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Section2;
