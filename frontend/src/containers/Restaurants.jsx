import React, { Fragment, useEffect, useRef } from 'react';
import { fetchRestaurants } from '../apis/restaurants';

export const Restaurants = () => {
  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    fetchRestaurants()
    .then((data) =>
      console.log(data)
    )
  }, [])

  return (
    <Fragment>
      レストラン一覧
    </Fragment>
  )
}
