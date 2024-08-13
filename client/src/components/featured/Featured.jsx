import useFetch from "../../hooks/useFetch";
import "./featured.css";



const Featured = () => {
  const { data, loading, error } = useFetch(
    `${process.env.REACT_APP_URL}/api/hotels/countByCity?cities=Bengaluru,Mumbai,Jaipur,Goa`
  );
  
  
  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/square600/483813680.webp?k=e3c0daa7f6f3077675c478fd496d0998657c953df7728b5dcad738df4fe5b109&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Bengaluru</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/square600/31204963.webp?k=f27ed7e8803d086d2e1e0a8cb3d2dc5950cbf7fed59adb02bc8db1354c2c1323&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Mumbai</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/xphoto/300x240/140018278.jpg?k=9d55980161ec78507cbfc75ba572b5256d3695228fe8e0d3589a45f481bfdc71&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Jaipur</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/square600/422404233.webp?k=3ffc46ac6348f624642528c3ad4c48119863fe9ed64099d28771af0d89eda4cd&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Goa</h1>
              <h2>{data[3]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;