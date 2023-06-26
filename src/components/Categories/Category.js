import { PropTypes } from 'prop-types';
import React from 'react';

const Category = ({
  name,
  top3,
  marketCap,
  vol24h,
  mrktCapChange24h,
}) => (
  <>
    <article className="category">
      <h1 className="category-name">{name}</h1>
      <div>
        {top3.map((image) => (
          <img key={Math.random()} src={image} alt={image} />
        ))}
      </div>
      <p className="categories-data-title">
        Market Cap:
      </p>
      <data className="categories-data">{`$${marketCap?.toLocaleString()}`}</data>
      <p className="categories-data-title">
        24h vlume:
      </p>
      <data className="categories-data">{`$${vol24h?.toLocaleString()}`}</data>
      <p className="categories-data-title">
        MC change 24h:
      </p>
      <data className={`categories-data ${mrktCapChange24h > 0 ? 'green' : 'red'}`}>{`${mrktCapChange24h?.toLocaleString().replace('-', '') || 'N/A'}%`}</data>
    </article>
  </>
);

Category.propTypes = {
  name: PropTypes.string.isRequired,
  top3: PropTypes.string.isRequired,
  marketCap: PropTypes.string.isRequired,
  vol24h: PropTypes.string.isRequired,
  mrktCapChange24h: PropTypes.string.isRequired,
};

export default Category;
