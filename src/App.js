import React, { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./styles.css";
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";

// import logo from "./logo.svg";

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			monsters: [],
			activeSet: {
				set: "set4",
				categoryName: "القطط",
			},
			sets: [
				{
					set: "set1",
					categoryName: "الروبوتات",
				},
				{
					set: "set2",
					categoryName: "الوحوش",
				},
				{
					set: "set3",
					categoryName: "رؤوس الربوت",
				},
				{
					set: "set4",
					categoryName: "القطط",
				},
			],
			searchField: "",
			name: "",
		};
	}

	handleChange = (e) => {
		this.setState({
			searchField: e.target.value,
		});
	};

	handlePrevious = (e) => {
		this.setState((prevState, prevProps) => {
			let index = prevState.sets.findIndex((el) => {
				return JSON.stringify(el) === JSON.stringify(prevState.activeSet);
			});
			index = index === 0 ? 3 : index - 1;
			return {
				activeSet: prevState.sets[index],
			};
		});
	};

	handleNext = (e) => {
		this.setState((prevState, prevProps) => {
			let index = prevState.sets.findIndex((el) => {
				return JSON.stringify(el) === JSON.stringify(prevState.activeSet);
			});
			index = index === 3 ? 0 : index + 1;
			console.log("Next ", prevState.sets[index].categoryName);
			return {
				activeSet: prevState.sets[index],
			};
		});
	};

	handleNameChange = (e) => {
		this.setState({
			name: e.target.value,
		});
	};
	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => {
				return this.setState({
					monsters: users,
				});
			});
	}

	render() {
		const { monsters, searchField } = this.state;

		const filteredMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchField.toLowerCase())
		);
		return (
			<div className="App">
				<h1 className="Title"> إبحث عن الوحش ديالك </h1>{" "}
				<div className="header">
					{" "}
					{/* the name of the user */}{" "}
					<SearchBox
						handleChange={this.handleNameChange}
						placeholder="الإسم"
						alt="Voir Votre monstre qui vous correspand!"
					/>
					<div className="controls">
						<button className="btn" onClick={this.handlePrevious}>
							<FcPrevious />
						</button>{" "}
						<h1 className="App-title"> {this.state.activeSet.categoryName} </h1>{" "}
						<button className="btn" onClick={this.handleNext}>
							<FcNext />
						</button>{" "}
					</div>{" "}
					<SearchBox placeholder="Filtrer " handleChange={this.handleChange} />{" "}
				</div>{" "}
				<CardList
					monsters={filteredMonsters}
					name={this.state.name}
					set={this.state.activeSet}
				/>{" "}
			</div>
		);
	}
}
