(this["webpackJsonpmemory-cards"]=this["webpackJsonpmemory-cards"]||[]).push([[0],{12:function(e,t,r){},13:function(e,t,r){"use strict";r.r(t);var a=r(0),c=r.n(a),n=r(6),s=r.n(n),o=r(1),i=r(2),l=r(4),h=r(3),u=function(e){Object(l.a)(r,e);var t=Object(h.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"card",onClick:function(){e.props.handleClick(e.props.character)}},c.a.createElement("div",{className:"card-content"},c.a.createElement("img",{className:"card-image",src:this.props.character.image,alt:this.props.character.name}),c.a.createElement("p",{className:"card-name"},this.props.character.name)))}}]),r}(c.a.Component);var m=function(e){return c.a.createElement("header",null,c.a.createElement("div",{className:"logo"},c.a.createElement("h1",null,"Marvel Memory Game")),c.a.createElement("div",{className:"score-card"},c.a.createElement("p",null,"Current score: ",e.currentScore),c.a.createElement("p",null,"Best score: ",e.bestScore)))},d=function e(t){Object(o.a)(this,e),this.name=t,this.isClicked=!1,this.image="/memory-cards"+"/images/".concat(this.name,".jpg")},f=["beast","black-widow","deadpool","gambit","ghost-rider","magneto","punisher","quicksilver","rogue","ultron","venom","wolverine"].map((function(e){return new d(e)})),v=function(e){Object(l.a)(r,e);var t=Object(h.a)(r);function r(){var e;return Object(o.a)(this,r),(e=t.call(this)).handleClick=function(t){console.log("/memory-cards"),t.isClicked?e.setState((function(e){return e.currentScore>e.bestScore?{isGameOver:!0,bestScore:e.currentScore,currentScore:0}:{isGameOver:!0,currentScore:0}})):e.setState((function(r){for(var a=0;a<r.characters.length;a++)t===r.characters[a]&&(r.characters[a].isClicked=!0);return{characters:r.characters,currentScore:e.state.currentScore+1}}))},e.refreshCharacters=function(){e.setState((function(e){for(var t=0;t<e.characters.length;t++)e.characters[t].isClicked=!1;return{characters:e.characters}}))},e.state={currentScore:0,bestScore:0,characters:f,isGameOver:!1},e}return Object(i.a)(r,[{key:"shuffleArray",value:function(e){for(var t=e.length-1;t>0;t--){var r=Math.floor(Math.random()*(t+1)),a=[e[r],e[t]];e[t]=a[0],e[r]=a[1]}return e}},{key:"componentDidMount",value:function(){var e=this.shuffleArray(this.state.characters);this.setState({characters:e})}},{key:"componentDidUpdate",value:function(e,t){if(t.currentScore!==this.state.currentScore){var r=this.shuffleArray(this.state.characters);this.setState({characters:r})}t.isGameOver&&(this.refreshCharacters(),this.setState({isGameOver:!1}))}},{key:"render",value:function(){var e=this,t=this.state.characters.map((function(t,r){return c.a.createElement(u,{key:r,character:t,handleClick:e.handleClick})}));return c.a.createElement("div",{className:"container"},c.a.createElement(m,{currentScore:this.state.currentScore,bestScore:this.state.bestScore}),c.a.createElement("div",{className:"content"},t))}}]),r}(c.a.Component);r(12);s.a.render(c.a.createElement(v,null),document.getElementById("root"))},7:function(e,t,r){e.exports=r(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.2c8bf98d.chunk.js.map