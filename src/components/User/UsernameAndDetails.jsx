import React, { PropTypes } from 'react'
import _ from 'lodash'
import moment from 'moment'
import { singlePluralFormatter } from '../../helpers'
import ISOCountries from '../../helpers/ISOCountries'

require('./UsernameAndDetails.scss')

const UsernameAndDetails = ({ username, country, numWins, memberSince }) => {
  const countryObject = _.find(ISOCountries, {alpha3: country})
  const userCountry = countryObject ? countryObject.name : ''

  const numberWins = singlePluralFormatter(numWins, 'win')

  memberSince = moment(memberSince).format('MMM YYYY')

  return (
    <div className="username-and-details">
      <div className="username">
        {username}
      </div>

      <div className="user-details">
        <div className="counry-and-wins">
          <span className="user-country">{userCountry}</span>

          <span>{' ' + numberWins}</span>
        </div>

        <div className="member-since">
          Member since {memberSince}
        </div>
      </div>
    </div>
  )
}

UsernameAndDetails.propTypes = {
  username   : PropTypes.string.isRequired,
  country    : PropTypes.string.isRequired,
  numWins    : PropTypes.number.isRequired,
  memberSince: PropTypes.number.isRequired
}

export default UsernameAndDetails
