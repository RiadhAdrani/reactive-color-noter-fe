interface Props {
    height?: number;
    width?: number;
}

export default (props: Props) => {
    return <div style={{ height: `${props.height}px`, width: `${props.width}px` }}></div>;
};
