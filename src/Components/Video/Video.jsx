/* eslint-disable react/prop-types */
import "./Video.css";
import LazyLoad from 'react-lazy-load';
export default function Video({ title, id, noq }) {
  return (
    <div className="video">
      <LazyLoad>
        <img
          src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`}
          alt={title}
        />
      </LazyLoad>
      <p>{title}</p>
      <div className="qmeta">
        <p>{noq} Questions</p>
        <p>Total points : {noq * 5}</p>
      </div>
    </div>
  );
}
