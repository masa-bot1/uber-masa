import React, { Fragment } from 'react';

export const Foods = ({ restaurantsId }) => {
  return (
    <Fragment>
      フード一覧
      <p>
        restaurantsIdは {restaurantsId} です
      </p>
    </Fragment>
  )
}
