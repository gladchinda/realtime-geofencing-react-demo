import React, { Component, Fragment } from 'react';

const BLACK_MARKER = 'https://i.imgur.com/8dOrls4.png?2';
const GREEN_MARKER = 'https://i.imgur.com/9v6uW8U.png';

class NearbyFriends extends Component {

  state = { people: [] }

  updatePeople = people => this.setState({ people })

  render() {

    const { people } = this.state;
    const { person: { name, id } } = this.props;

    const nameBadgeStyles = {
      fontSize: '0.8rem',
      height: 40,
      borderRadius: 20,
      cursor: 'pointer'
    };

    const showPeople = (filterFn, marker) => {
      return <Fragment>
        { people.filter(filterFn).map((person, index) => {
          if (person.id === id) return null;
          return (
            <div key={index} className="d-flex border-bottom border-gray w-100 px-4 py-3 font-weight-bold text-secondary align-items-center">
              <div className="pl-2" style={{ width: 30, height: 30 }}>
                <img src={marker} className="img-fluid" alt="marker" />
              </div>
              <span className="pl-3">{person.name}</span>
            </div>
          );
        }) }
      </Fragment>
    };

    return id && <Fragment>

      <div className="border-bottom border-gray w-100 px-2 d-flex align-items-center bg-white justify-content-between" style={{ height: 90 }}>
        <span className="h4 text-dark mb-0 mx-4 font-weight-bold">Nearby Friends</span>
        <span className="d-flex align-items-center text-center text-white bg-primary font-weight-bold py-2 px-4 mx-4" style={nameBadgeStyles} title={name}>{name}</span>
      </div>

      <div className="w-100 d-flex flex-wrap align-items-start align-content-start position-relative" style={{ height: 'calc(100% - 90px)', overflowY: 'auto' }}>
        { showPeople(person => person.within, GREEN_MARKER) }
        { showPeople(person => !person.within, BLACK_MARKER) }
      </div>

    </Fragment>

  }

};

export default NearbyFriends;
