import React from 'react';

const ChoosePersona = props => {

  const { people = [], count = 3, onSelected = f => f } = props;

  const nameBadgeStyles = {
    fontSize: '0.8rem',
    height: 40,
    borderRadius: 20,
    cursor: 'pointer'
  };

  const choosePersona = id => evt => onSelected(id);

  const randomPeople = count => people => {
    const selected = [];
    let i = 0;

    count = Math.max(0, Math.min(count, people.length));

    while (i < count) {
      const index = Math.floor(Math.random() * people.length);
      if (selected.includes(index)) continue;
      ++i && selected.push(index);
    }

    return selected.map(index => {
      const { id, name } = people[index];
      const className = 'd-flex align-items-center text-center text-white bg-secondary font-weight-bold py-2 px-4 mx-1 my-2';

      return <span key={index} className={className} style={nameBadgeStyles} title={name} onClick={ choosePersona(id) }>{name}</span>
    });
  };

  return (
    <div className="w-100 h-100 px-3 pb-5 d-flex flex-wrap align-items-center align-content-center justify-content-center">
      <span className="h3 text-dark text-center py-3 w-100 font-weight-bold">Choose your Persona</span>
      { randomPeople(count)(people) }
    </div>
  );

};

export default ChoosePersona;
