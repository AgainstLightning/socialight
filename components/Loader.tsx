const Loader = ({ show }: { show: boolean }): JSX.Element | null => {
    return show ? <div className="loader"></div> : null;
}

export default Loader;