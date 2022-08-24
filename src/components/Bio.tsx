import { Link } from 'gatsby';
import React from 'react';
import { useHelmetQuery } from '../queries/useHelmetQuery';

const Bio = () => {
  const { profile } = useHelmetQuery();
  return (
    <div
      style={{
        display: 'flex',
        marginBottom: '3.5rem',
      }}
    >
      <img
        src={profile.bigIcon.src}
        alt={`Mohit Kumar`}
        style={{
          marginRight: '0.875rem',
          marginBottom: 0,
          width: '3.5rem',
          height: '3.5rem',
          borderRadius: '50%',
        }}
      />
      <p style={{ maxWidth: 310 }}>
        Writings by <Link to="/">Mohit Kumar</Link>.
      </p>
    </div>
  );
};

export default Bio;
