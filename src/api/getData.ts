export const getData = async () => {
  try {
    const res = await fetch('/cint-tech-test/db.json');
    return res.json();
  } catch (error) {
    throw new Error(`ERROR: ${error}`);
  }
};
