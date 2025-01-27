import React, { Fragment, useEffect } from 'react';

// apis
import { fetchFoods } from '../apis/foods';

export const Foods = ({ restaurantsId }) => {
  useEffect(() => {
    fetchFoods(restaurantsId)
    .then((data) =>
      console.log(data)
    )
  }, [])

  return (
    <Fragment>
      フード一覧
      <p>
        restaurantsIdは {restaurantsId} です
      </p>
    </Fragment>
  )
}
