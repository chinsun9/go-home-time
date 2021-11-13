import React from 'react';
import { useRouteMatch, Redirect } from 'react-router-dom';
import moment from 'moment';

type MatchParams = {
  input: string;
};

function Start() {
  const match = useRouteMatch<MatchParams>();
  const { input } = match?.params as MatchParams;
  const numberInput = Number(input);

  if (Number.isNaN(numberInput) || numberInput < 0 || numberInput > 12)
    return <Redirect to="/invalid" />;

  const quittingTime = moment().add(numberInput, 'hours').format('HHmm');
  return <Redirect to={`/${quittingTime}`} />;
}

export default Start;
