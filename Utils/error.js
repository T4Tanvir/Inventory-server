function Error(msg = "Something went wrong", status = 500) {
  let err = {
    msg: msg,
    status: status,
  };
  return err;
}

module.exports = Error;
