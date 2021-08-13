import React, { Component } from "react";
import "./Section3.css";

class Section3 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activities: [
				{ id_activity: 99, name: "Menggambar", isComplete: false },
			],
			count: 1,
		};
	}

	addCount() {
		const newString = { name: "", id_activity: null, isComplete: false };

		this.setState({
			count: this.state.count + 1,
			activities: [...this.state.activities, newString],
		});
	}

	onHandleChange(i, value, id_name) {
		const newActivities = [...this.state.activities];
		if (id_name === "name") {
			newActivities[i].name = value;
		}

		this.setState({
			activities: newActivities,
		});
	}

	changeColorComplete(i, value) {
		const newActivities = [...this.state.activities];
		newActivities[i].isComplete = !value;

		this.setState({
			activities: newActivities,
		});
	}

	deleteActivity(i) {
		let currentActivities = [...this.state.activities];
		let newList = [];

		for (let index = 0; index < this.state.activities.length; index++) {
			if (index !== i) {
				newList.push(currentActivities[index]);
			}
		}

		this.setState({
			count: this.state.count !== 1 ? this.state.count - 1 : 0,
			activities: newList,
		});
	}

	deleteAll() {
		this.setState({
			count: 0,
			activities: [],
		});
	}

	shuffleActivites() {
		const resultArr = this.shuffle(this.state.activities);
		this.setState({
			activities : resultArr
		})

	}
	shuffle(array) {
		var currentIndex = array.length,
			temporaryValue,
			randomIndex;

		while (0 !== currentIndex) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}

		return array;
	}
	render() {
		const { activities } = this.state;
		const activityCard = [];

		for (let j = 0; j < this.state.count; j++) {
			let colors = activities[j].isComplete ? "bg-grey" : "";
			activityCard.push(
				<div
					className="d-flex flex-row customize"
					key={`activity-${j}`}
				>
					<input
						className={["input-control", colors].join(" ")}
						type="text"
						id="name"
						value={activities[j].name}
						onChange={(e) =>
							this.onHandleChange(j, e.target.value, e.target.id)
						}
						readOnly={activities[j].isComplete}
					/>

					<div
						className="minus"
						onClick={() => this.deleteActivity(j)}
					>
						<span className="red-text">-</span>
					</div>

					<div
						className="plus"
						onClick={() =>
							this.changeColorComplete(
								j,
								activities[j].isComplete
							)
						}
					>
						<span className="green-text">V</span>
					</div>
				</div>
			);
		}
		return (
			<div className="bg-sec3">
				<div className="top-ctn">
					<div className="demo">
						<span className="title-sec3">Demo Sederhana</span>
						<div className="tabels">
							<div className="col-md-6 d-flex flex-column">
								{activityCard}
								<div
									className="btn-add"
									onClick={() => this.addCount()}
								>
									{this.state.count < 5 ? (
										<div className="btn-add-sec3">
											<span>Tambah Kegiatan</span>
										</div>
									) : (
										<span className="errText">
											*Kamu telah menambahkan maksimal 5
											kegiatan
										</span>
									)}
								</div>
							</div>
							<div className="col-md-6 d-flex flex-column wrap-pd">
								<span className="total-text">
									Jumlah Kegiatan :&nbsp; {this.state.count}
								</span>
								{this.state.count > 1 ? (
									<div
										className="btn-split"
										onClick={() => this.shuffleActivites()}
									>
										<span>Acak Semua Item</span>
									</div>
								) : (
									<></>
								)}
								{this.state.count >= 1 ? (
									<div
										className="btn-del"
										onClick={() => this.deleteAll()}
									>
										<span>Hapus Semua Item</span>
									</div>
								) : (
									<></>
								)}
							</div>
						</div>
					</div>
				</div>
				<div className="btm-ctn"></div>
			</div>
		);
	}
}

export default Section3;
