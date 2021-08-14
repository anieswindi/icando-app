import React, { Component, createRef } from "react";
import Section1 from "../sections/section1/Section1";
import Section2 from "../sections/section2/Section2";
import Section3 from "../sections/section3/Section3";
import Section4 from "../sections/section4/Section4";
import Section5 from "../sections/section5/Section5";

import "./Home.css";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentSection: "",
			navbar: [
				{
					id: 1,
					name: "TENTANG",
				},
				{
					id: 2,
					name: "KENAPA TO DO APP",
				},
				{
					id: 3,
					name: "DEMO SEDERHANA",
				},
				{
					id: 4,
					name: "TESTIMONI",
				},
				{
					id: 5,
					name: "KONTAK",
				},
			],
		};
		this.scrollingHandler = this.scrollingHandler.bind(this);
	}
	section1 = createRef();
	section2 = createRef();
	section3 = createRef();
	section4 = createRef();
	section5 = createRef();
	section6 = createRef();

	componentDidMount() {
		window.addEventListener("scroll", this.scrollingHandler, true);
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.scrollingHandler, true);
	}

	scrollingHandler() {
		if (
			this.section1.current.getBoundingClientRect().bottom <
				this.section1.current.getBoundingClientRect().height &&
			this.section1.current.getBoundingClientRect().bottom > -1
		) {
			this.setState({
				currentSection: "Section1",
			});
		}
		if (
			this.section2.current.getBoundingClientRect().bottom <
				this.section2.current.getBoundingClientRect().height &&
			this.section2.current.getBoundingClientRect().bottom > -1
		) {
			this.setState({
				currentSection: "Section2",
			});
		}
		if (
			this.section3.current.getBoundingClientRect().bottom <
				this.section3.current.getBoundingClientRect().height &&
			this.section3.current.getBoundingClientRect().bottom > -1
		) {
			this.setState({
				currentSection: "Section3",
			});
		}
		if (
			this.section4.current.getBoundingClientRect().bottom <
				this.section4.current.getBoundingClientRect().height &&
			this.section4.current.getBoundingClientRect().bottom > -1
		) {
			this.setState({
				currentSection: "Section4",
			});
		}
		if (
			this.section5.current.getBoundingClientRect().bottom <
				this.section5.current.getBoundingClientRect().height &&
			this.section5.current.getBoundingClientRect().bottom > -1
		) {
			this.setState({
				currentSection: "Section5",
			});
		}
	}

	scrolltoSectionHandler(key) {
		if (key === "TENTANG") {
			this.section1.current.scrollIntoView({ behavior: "smooth" });
		} else if (key === "KENAPA TO DO APP") {
			this.section2.current.scrollIntoView({ behavior: "smooth" });
		} else if (key === "DEMO SEDERHANA") {
			this.section3.current.scrollIntoView({ behavior: "smooth" });
		} else if (key === "TESTIMONI") {
			this.section4.current.scrollIntoView({ behavior: "smooth" });
		} else if (key === "KONTAK") {
			this.section5.current.scrollIntoView({ behavior: "smooth" });
		}
	}
	render() {
		let navbar = this.state.navbar.map((nav, i) => {
			return (
				<span
					key={`nav-${i}`}
					onClick={() => this.scrolltoSectionHandler(nav.name)}
				>
					{nav.name}
				</span>
			);
		});
		return (
			<div>
				<div className="c-box-sticky">{navbar}</div>
				<div ref={this.section1}>
					<Section1 />
				</div>
				<div ref={this.section2}>
					<Section2 />
				</div>
				<div ref={this.section3}>
					<Section3 />
				</div>
				<div ref={this.section4}>
					<Section4 />
				</div>
				<div ref={this.section5}>
					<Section5 />
				</div>
			</div>
		);
	}
}

export default Home;
