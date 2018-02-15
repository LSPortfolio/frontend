import React from 'react';

export default ({ headerText, helperText }) => (
  <div className="col-sm-12">
    <h4> {headerText} </h4>
    <p className="text-muted">{helperText}</p>
    <hr />
  </div>
)