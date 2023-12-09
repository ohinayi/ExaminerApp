import React, {createContext} from "react";

export const Theme = createContext();

class ThemeProvider extends React.Component {
    state ={
        isDarkTheme:false,
        LightTheme: {
            text:'#222',
            background:'#d8ddf1'
        },
        DarkTheme: {
            text:'#fff',
            background:'#5c5c5c'
        }
    };

    changeTheme = () => {
        this.setState({ isDarkTheme: !this.state.isDarkTheme});
    }
    render() {
        return(
            <Theme.Provider value={{...this.state, changeTheme:this.changeTheme}}>
                {this.props.children}
            </Theme.Provider>
        );
    }

};
export default ThemeProvider;