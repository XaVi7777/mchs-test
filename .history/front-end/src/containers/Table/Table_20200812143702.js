import React, { useEffect } from 'react';

export default class Table extends React.Component {
  async componentDidMount() {

    const response = await fetch('https://cors-anywhere.herokuapp.com/http://www.cbr.ru/scripts/XML_daily.asp?date_req=11/08/2020',{
      headers:{'Access-Control-Allow-Origin': '*'}
    });
    const text = await response.text();
    function xmlToJson(xml) {
	
      // Create the return object
      var obj = {};
    
      if (xml.nodeType == 1) { // element
        // do attributes
        if (xml.attributes.length > 0) {
        obj["@attributes"] = {};
          for (var j = 0; j < xml.attributes.length; j++) {
            var attribute = xml.attributes.item(j);
            obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
          }
        }
      } else if (xml.nodeType == 3) { // text
        obj = xml.nodeValue;
      }
    
      // do children
      if (xml.hasChildNodes()) {
        for(var i = 0; i < xml.childNodes.length; i++) {
          var item = xml.childNodes.item(i);
          var nodeName = item.nodeName;
          if (typeof(obj[nodeName]) == "undefined") {
            obj[nodeName] = xmlToJson(item);
          } else {
            if (typeof(obj[nodeName].push) == "undefined") {
              var old = obj[nodeName];
              obj[nodeName] = [];
              obj[nodeName].push(old);
            }
            obj[nodeName].push(xmlToJson(item));
          }
        }
      }
      return obj;
    };
    const json = await JSON.parse(text)
    console.log(json)
  }
  // useEffect(async () => {
  //   const response = await fetch('http://www.cbr.ru/scripts/XML_daily.asp?date_req=11/08/2020');
  //   console.log(response)
  //   // eslint-disable-next-line
  // }, []);

  render() {
    return (
      <h1>Table</h1>
    )
  }
}
