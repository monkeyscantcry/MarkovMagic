import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars

import { Pool } from './Pool';

export const App = React.createClass({

  render: function () {
    return (
      <div className="ContentPage">
        <div className="ContentPage-container">
          <Pool contents={
          [
              {
                "name": "Bayou",
                "src": "http:\/\/magiccards.info\/scans\/en\/vma\/293.jpg",
                "quantity": 1
              },
              {
                "name": "Cavern of Souls",
                "src": "http:\/\/magiccards.info\/scans\/en\/avr\/226.jpg",
                "quantity": 1
              },
              {
                "name": "Dryad Arbor",
                "src": "http:\/\/magiccards.info\/scans\/en\/v12\/5.jpg",
                "quantity": 1
              },
              {
                "name": "Fauna Shaman",
                "src": "http:\/\/magiccards.info\/scans\/en\/m11\/172.jpg",
                "quantity": 1
              },
              {
                "name": "Horizon Canopy",
                "src": "http:\/\/magiccards.info\/scans\/en\/fut\/177.jpg",
                "quantity": 1
              },
              {
                "name": "Maze of Ith",
                "src": "http:\/\/magiccards.info\/scans\/en\/v12\/10.jpg",
                "quantity": 1
              },
              {
                "name": "Mother of Runes",
                "src": "http:\/\/magiccards.info\/scans\/en\/ddo\/20.jpg",
                "quantity": 1
              },
              {
                "name": "Ponder",
                "src": "http:\/\/magiccards.info\/scans\/en\/m12\/73.jpg",
                "quantity": 1
              },
              {
                "name": "Qasali Pridemage",
                "src": "http:\/\/magiccards.info\/scans\/en\/ddh\/10.jpg",
                "quantity": 1
              },
              {
                "name": "Scavenging Ooze",
                "src": "http:\/\/magiccards.info\/scans\/en\/m14\/195.jpg",
                "quantity": 1
              },
              {
                "name": "Spellstutter Sprite",
                "src": "http:\/\/magiccards.info\/scans\/en\/mma\/65.jpg",
                "quantity": 1
              },
              {
                "name": "Sylvan Library",
                "src": "http:\/\/magiccards.info\/scans\/en\/vma\/235.jpg",
                "quantity": 1
              },
              {
                "name": "Taiga",
                "src": "http:\/\/magiccards.info\/scans\/en\/vma\/317.jpg",
                "quantity": 1
              },
              {
                "name": "Tropical Island",
                "src": "http:\/\/magiccards.info\/scans\/en\/vma\/321.jpg",
                "quantity": 1
              },
              {
                "name": "Verdant Catacombs",
                "src": "http:\/\/magiccards.info\/scans\/en\/zen\/229.jpg",
                "quantity": 1
              },
              {
                "name": "Wild Nacatl",
                "src": "http:\/\/magiccards.info\/scans\/en\/ddh\/4.jpg",
                "quantity": 1
              },
              {
                "name": "Bloodstained Mire",
                "src": "http:\/\/magiccards.info\/scans\/en\/ktk\/230.jpg",
                "quantity": 2
              },
              {
                "name": "Brainstorm",
                "src": "http:\/\/magiccards.info\/scans\/en\/vma\/58.jpg",
                "quantity": 2
              },
              {
                "name": "Deathrite Shaman",
                "src": "http:\/\/magiccards.info\/scans\/en\/rtr\/213.jpg",
                "quantity": 2
              },
              {
                "name": "Force of Will",
                "src": "http:\/\/magiccards.info\/scans\/en\/vma\/69.jpg",
                "quantity": 2
              },
              {
                "name": "Jace, the Mind Sculptor",
                "src": "http:\/\/magiccards.info\/scans\/en\/vma\/74.jpg",
                "quantity": 2
              },
              {
                "name": "Savannah",
                "src": "http:\/\/magiccards.info\/scans\/en\/vma\/311.jpg",
                "quantity": 2
              },
              {
                "name": "Thalia, Guardian of Thraben",
                "src": "http:\/\/magiccards.info\/scans\/en\/dka\/24.jpg",
                "quantity": 2
              },
              {
                "name": "Umezawa's Jitte",
                "src": "http:\/\/magiccards.info\/scans\/en\/gpx\/4.jpg",
                "quantity": 2
              },
              {
                "name": "Green Sun's Zenith",
                "src": "http:\/\/magiccards.info\/scans\/en\/v13\/19.jpg",
                "quantity": 3
              },
              {
                "name": "Lightning Bolt",
                "src": "http:\/\/magiccards.info\/scans\/en\/pd2\/17.jpg",
                "quantity": 3
              },
              {
                "name": "Punishing Fire",
                "src": "http:\/\/magiccards.info\/scans\/en\/cmd\/131.jpg",
                "quantity": 3
              },
              {
                "name": "Wooded Foothills",
                "src": "http:\/\/magiccards.info\/scans\/en\/ktk\/249.jpg",
                "quantity": 3
              },
              {
                "name": "Badlands",
                "src": "http:\/\/magiccards.info\/scans\/en\/vma\/291.jpg",
                "quantity": 4
              },
              {
                "name": "Dark Confidant",
                "src": "http:\/\/magiccards.info\/scans\/en\/mma\/75.jpg",
                "quantity": 4
              },
              {
                "name": "Grove of the Burnwillows",
                "src": "http:\/\/magiccards.info\/scans\/en\/v12\/8.jpg",
                "quantity": 4
              },
              {
                "name": "Hymn to Tourach",
                "src": "http:\/\/magiccards.info\/scans\/en\/vma\/122.jpg",
                "quantity": 4
              },
              {
                "name": "Knight of the Reliquary",
                "src": "http:\/\/magiccards.info\/scans\/en\/mma\/178.jpg",
                "quantity": 4
              },
              {
                "name": "Liliana of the Veil",
                "src": "http:\/\/magiccards.info\/scans\/en\/isd\/105.jpg",
                "quantity": 4
              },
              {
                "name": "Noble Hierarch",
                "src": "http:\/\/magiccards.info\/scans\/en\/cfx\/87.jpg",
                "quantity": 4
              },
              {
                "name": "Swords to Plowshares",
                "src": "http:\/\/magiccards.info\/scans\/en\/vma\/51.jpg",
                "quantity": 4
              },
              {
                "name": "Tarmogoyf",
                "src": "http:\/\/magiccards.info\/scans\/en\/mma\/166.jpg",
                "quantity": 4
              },
              {
                "name": "Thrun, the Last Troll",
                "src": "http:\/\/magiccards.info\/scans\/en\/mbs\/92.jpg",
                "quantity": 4
              },
              {
                "name": "Wasteland",
                "src": "http:\/\/magiccards.info\/scans\/en\/mprp\/1.jpg",
                "quantity": 4
              },
              {
                "name": "Windswept Heath",
                "src": "http:\/\/magiccards.info\/scans\/en\/ktk\/248.jpg",
                "quantity": 4
              }
            ]
          } />
        </div>
      </div>
    );
  }

})
