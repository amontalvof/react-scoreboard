const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
};

const formatDate = (date) => {
    return new Intl.DateTimeFormat(undefined, options).format(date);
};

export default formatDate;
