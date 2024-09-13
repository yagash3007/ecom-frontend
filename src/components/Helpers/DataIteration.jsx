function DataIteration(props) {
  const { datas = [], children } = props;
  return (
    <>
      {datas &&
        datas.length &&
        datas.map((value) => children({ datas: value }))}
    </>
  );
}

export default DataIteration;
