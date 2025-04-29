// index.js

import {Component} from 'react'

import ThumbnailItem from '../ThumbnailItem'

import './index.css'

const imagesList = [
  {
    id: 0,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-thumbnail-img.png',
    imageAltText: 'nature mountain with pond',
    thumbnailAltText: 'nature mountain with pond thumbnail',
  },
  {
    id: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-sunset-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-sunset-thumbnail-img.png',
    imageAltText: 'nature sunset',
    thumbnailAltText: 'nature sunset thumbnail',
  },
  {
    id: 2,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-thumbnail-img.png',
    imageAltText: 'nature mountain with ocean',
    thumbnailAltText: 'nature mountain with ocean thumbnail',
  },
  {
    id: 3,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-thumbnail-img.png',
    imageAltText: 'nature mountain with forest',
    thumbnailAltText: 'nature mountain with forest thumbnail',
  },
  {
    id: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-leaves-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-leaves-thumbnail-img.png',
    imageAltText: 'nature leaves',
    thumbnailAltText: 'nature leaves thumbnail',
  },
  {
    id: 5,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-tree-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-tree-thumbnail-img.png',
    imageAltText: 'nature tree',
    thumbnailAltText: 'nature tree thumbnail',
  },
  {
    id: 6,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-waterfall-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-waterfall-thumbnail-img.png',
    imageAltText: 'nature waterfall',
    thumbnailAltText: 'nature waterfall thumbnail',
  },
  {
    id: 7,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-river-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-river-thumbnail-img.png',
    imageAltText: 'nature river',
    thumbnailAltText: 'nature river thumbnail',
  },
]

// Write your code here.

class Gallery extends Component {
  state = {
    id: imagesList[0].id,
    imageUrl: imagesList[0].imageUrl,
    imageAltText: imagesList[0].imageAltText,
  }

  clickThumbnailItem = eachItem => {
    this.setState({
      id: eachItem.id,
      imageUrl: eachItem.imageUrl,
      imageAltText: eachItem.imageAltText,
    })
  }

  render() {
    const {id, imageUrl, imageAltText} = this.state
    return (
      <div className="bg-container">
        <img src={imageUrl} alt={imageAltText} className="selected-image" />
        <h1 className="heading">Nature Photography</h1>
        <p className="description">Nature Photography by Rahul</p>
        <ul className="unordered-list">
          {imagesList.map(eachListItem => (
            <ThumbnailItem
              key={eachListItem.id}
              eachListItem={eachListItem}
              clickThumbnailItem={this.clickThumbnailItem}
              imageUrl={imageUrl}
              imageAltText={imageAltText}
              isActiveImg={id === eachListItem.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Gallery


//The above code is Gallery Component
// The below code is ThumbnailItem component

// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {eachListItem, clickThumbnailItem, isActiveImg} = props
  const {thumbnailUrl, thumbnailAltText} = eachListItem
  const onClickThumbnail = () => {
    clickThumbnailItem(eachListItem)
  }
  const extraClass = isActiveImg ? '' : 'blurred'
  return (
    <li className="list-item">
      <button
        className={`thumbnail-img ${extraClass}`}
        onClick={onClickThumbnail}
        type="button"
      >
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
 
