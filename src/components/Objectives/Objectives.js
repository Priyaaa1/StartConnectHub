import React from 'react';
import './objectives.css'; // Import your CSS file

const Objectives = () => {
  return (
    <div className="objectives-wrapper">
      <h1>Our Objectives</h1>
      <div className="objective-item">
        <h2>Objective 1</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at arcu sit amet nisi posuere commodo.
          Suspendisse ut tellus nec ligula interdum vestibulum. Duis sed massa nisi. Sed ac dictum velit, id
          vestibulum velit. Quisque fermentum enim eget mi aliquet, vel fermentum justo vestibulum. Ut convallis
          mauris in odio mollis viverra.
        </p>
      </div>
      <div className="objective-item">
        <h2>Objective 2</h2>
        <p>
          Integer sit amet ante vel felis pharetra placerat. Duis bibendum, libero id tristique eleifend, leo
          turpis scelerisque ipsum, at convallis nisl dui a libero. Aliquam sit amet ultrices libero. Nulla mollis
          lacus sit amet augue tincidunt, ut vehicula nunc feugiat.
        </p>
      </div>
      <div className="objective-item">
        <h2>Objective 3</h2>
        <p>
          Sed nec mi nisl. Vivamus eu turpis sit amet quam elementum posuere. Nulla nec vestibulum nisl. Cras
          aliquam magna vel nulla sagittis, at pulvinar magna sagittis. Sed id arcu volutpat, pharetra dui nec,
          feugiat odio.
        </p>
      </div>
    </div>
  );
};

export default Objectives;
