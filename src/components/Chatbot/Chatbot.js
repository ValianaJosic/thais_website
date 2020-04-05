import React from 'react';
import { Component } from 'react';
import '../Chatbot/Chatbot.css';


class Chatbot extends Component {

    componentDidMount() {
        (function (d, m) {
            var kommunicateSettings = { "appId": "3f599c0205827d0cbe35e65828476e48a", "popupWidget": true, "automaticChatOpenOnNavigation": true };
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});
    }

    render() {

        return (
            <div> </div>
        );
    }
}


export default Chatbot;