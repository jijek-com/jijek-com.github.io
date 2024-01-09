const NavigationItem = ({ className, item }) => {
    return (
        <li className={className}>
          <a href={item.link}>{item.title}</a>
        </li>
      );
};

export default NavigationItem;
