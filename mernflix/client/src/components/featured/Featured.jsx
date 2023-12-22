import { InfoOutlined, PlayArrow } from "@mui/icons-material"
import "./featured.scss"

const Featured = ({type}) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type==="movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option >Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img src="https://media.istockphoto.com/id/1389394961/photo/detective-male-silhouette-in-suit-and-hat-on-street.jpg?s=2048x2048&w=is&k=20&c=6YJ3z1vaKkFCRq1ktYtImqeYQiz_00I5n5eoG-dRuyg=" alt="" />
    <div className="info">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Harry_Potter_wordmark.svg/1280px-Harry_Potter_wordmark.svg.pn" alt="the matrix" />
      <span className="desc">this movie is all about your feather Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, aperiam dolore ex itaque soluta voluptate ducimus minus quia dolores harum nostrum voluptatibus nobis et numquam aliquid hic expedita doloribus iusto. </span>
       <div className="buttons">
        <button className="play">
          <PlayArrow/>
          <span>Play</span>
        </button>
        <button className="more">
          <InfoOutlined/>
          <span>Info</span>
        </button>
       </div>
    </div>
    </div>
  )
}

export default Featured