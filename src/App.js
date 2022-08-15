import React, { useState, useEffect } from "react";
// import React, { Component } from "react";
import CardList from "./components/card-list/card-list.componets";
import SearchBox from "./components/search-box/search-box.component";

import "./App.css";
const App = () => {
  const [searchField, setSearchField] = useState("a");
  const [monsters, setMonsters] = useState([]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  const filterMonsters = monsters.filter((monster) => {
    console.log(monster.name.toLocaleLowerCase().includes(searchField));
    return monster.name.toLocaleLowerCase().includes(searchField);
  });

  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>

      <SearchBox
        className="monster-search-box"
        onChangeHandler={onSearchChange}
        placeholder="search-monster"
      />
      <CardList monsters={filterMonsters} />
    </div>
  );
};
export default App;
//     if (searchField) {
//       const filterMonsters = this.state.monsters.filter((monster) => {
//         return monster.name.toLowerCase().includes(searchField);
//       });
//       this.setState({
//         monsters: filterMonsters,
//       });
//     } else {
//       thies.fetchMonsters();
//     }
//   };

//   //   render() {
//   //     const { monsters, searchField } = this.state;
//   //     const { onSearchChange } = this;

//   //     return (
//   //       <div className="App">
//   //         <h1 className="app-title">Monster Rolodex</h1>
//   //         {/* {filterMonsters.map((monster) => {
//   //           return (
//   //             <div key={monster.id}>
//   //               <h1>{monster.name}</h1>
//   //             </div>
//   //           );
//   //         })} */}

//   //         <SearchBox
//   //           className="monster-search-box"
//   //           onChangeHandler={onSearchChange}
//   //           placeholder="search-monster"
//   //         />
//   //         <CardList monsters={monsters} />
//   //       </div>
//   //     );
//   //  }

// class App extends Component {
//   state = {
//     monsters: [],
//     searchField: "",
//   };

//   fetchMonsters = () => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((usernames) =>
//         this.setState(() => {
//           return { monsters: usernames };
//         })
//       );
//   };

//   componentDidMount() {
//     this.fetchMonsters();
//   }
//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase();

//     if (searchField) {
//       const filterMonsters = this.state.monsters.filter((monster) => {
//         return monster.name.toLowerCase().includes(searchField);
//       });
//       this.setState({
//         monsters: filterMonsters,
//       });
//     } else {
//       this.fetchMonsters();
//     }
//   };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     return (
//       <div className="App">
//         <h1 className="app-title">Monster Rolodex</h1>
//         {/* {filterMonsters.map((monster) => {
//           return (
//             <div key={monster.id}>
//               <h1>{monster.name}</h1>
//             </div>
//           );
//         })} */}

//         <SearchBox
//           className="monster-search-box"
//           onChangeHandler={onSearchChange}
//           placeholder="search-monster"
//         />
//         <CardList monsters={monsters} />
//       </div>
//     );
//   }
// }

// export default App;
