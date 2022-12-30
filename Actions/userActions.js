// import performRequest from '../services/networkProvider';
// import _ from 'underscore';
// ******************* Auth api *******************
// ---------- sign in or login api ----------
export function LoginApi(data) {
  return function (dispatch) {
    return new Promise((resolve, reject) => {
      performRequest(`user/generate-otp/`, data, 'POST', null)
        .then(response => {
          dispatch({
            type: 'LoginType',
            subtype: 'loading',
          });
          if (response) {
            dispatch({
              type: 'LoginType',
              subtype: 'success',
            });
          }
          resolve(response);
        })
        .catch(error => {
          dispatch({
            type: 'LoginType',
            error,
          });
          reject(error);
        });
    });
  };
}

export function GenerateTxnApi(data) {
  return function (dispatch) {
    return new Promise((resolve, reject) => {
      performRequest(`user/generate-txn-id/`, data, 'POST', null)
        .then(response => {
          dispatch({
            type: 'GenerateTxnApi',
            subtype: 'loading',
          });
          if (response) {
            dispatch({
              type: 'GenerateTxnApi',
              subtype: 'success',
            });
          }
          resolve(response);
        })
        .catch(error => {
          dispatch({
            type: 'GenerateTxnApi',
            error,
          });
          reject(error);
        });
    });
  };
}



export function AuthData(data) {
  return async (dispatch, getState) => {
    dispatch({
      type: 'authData',
      subtype: 'loading',
    });
    dispatch({
      type: 'authData',
      subtype: 'success',
      user: data,
    });
  };
}

export function UserToken(data) {
  return async (dispatch, getState) => {
    dispatch({
      type: 'UserToken',
      subtype: 'loading',
    });
    dispatch({
      type: 'UserToken',
      subtype: 'success',
      token: data,
    });
  };
}

export function StudentListReduxApi(data) {
  return async (dispatch, getState) => {
    dispatch({
      type: 'StdList',
      subtype: 'loading',
    });
    dispatch({
      type: 'StdList',
      subtype: 'success',
      students: data,
    });
  };
}

export function StudentAPI(data) {
  return async (dispatch, getState) => {
    dispatch({
      type: 'StudentAPI',
      subtype: 'loading',
    });
    dispatch({
      type: 'StudentAPI',
      subtype: 'success',
      STD: data,
    });
  };
}

// ---------- Confirm otp api ----------

export function ConfirmOtpApi(data) {
  return function (dispatch) {
    return new Promise((resolve, reject) => {
      performRequest(`user/confirm-otp/`, data, 'POST', null)
        .then(response => {
          dispatch({
            type: 'ConfirmOtpApi',
            subtype: 'loading',
          });
          if (response) {
            dispatch({
              type: 'ConfirmOtpApi',
              subtype: 'success',
            });
          }
          resolve(response);
        })
        .catch(error => {
          dispatch({
            type: 'ConfirmOtpApi',
            error,
          });
          reject(error);
        });
    });
  };
}

// ---------- student api ----------

export function GetStudentByID() {
  return function (dispatch, getState) {
    let token = getState().user?.STD?.token
    let id = getState().user?.STD?.id
    console.log('1111111', token, id);
    return new Promise((resolve, reject) => {
      performRequest(`user/students/${id}/`, null, 'GET', token)
        .then(response => {
          dispatch({
            type: 'GetStudentByID',
            subtype: 'loading',
          });
          if (response) {
            dispatch({
              type: 'GetStudentByID',
              subtype: 'success',
            });
          }
          resolve(response);
        })
        .catch(error => {
          dispatch({
            type: 'GetStudentByID',
            error,
          });
          reject(error);
        });
    });
  };
}

export function EditStudentByID(data) {
  let datas = {
    name: data?.name,
    mobile_number: data?.mobile_number,
    date_of_birth: data?.date_of_birth,
    age: data?.age,
    role_id:data?.role_id,
    school_id: data?.school_id,
    standard: data?.standard
  }
  return function (dispatch, getState) {
    return new Promise((resolve, reject) => {
      performRequest(`user/students/${data.id}/`, datas, 'PUT', data?.token)
        .then(response => {
          dispatch({
            type: 'EditStudentAPI',
            subtype: 'loading',
          });
          if (response) {
            dispatch({
              type: 'EditStudentAPI',
              subtype: 'success',
            });
          }
          resolve(response);
        })
        .catch(error => {
          dispatch({
            type: 'EditStudentAPI',
            error,
          });
          reject(error);
        });
    });
  };
}

export function AddStudentAPI(data) {
  return function (dispatch) {
    return new Promise((resolve, reject) => {
      performRequest(`user/students/`, data, 'POST', null)
        .then(response => {
          dispatch({
            type: 'AddStudentAPI',
            subtype: 'loading',
          });
          if (response) {
            dispatch({
              type: 'AddStudentAPI',
              subtype: 'success',
            });
          }
          resolve(response);
        })
        .catch(error => {
          dispatch({
            type: 'AddStudentAPI',
            error,
          });
          reject(error);
        });
    });
  };
}

export function EditStudentAPI(data) {
  return function (dispatch, getState) {
    let token = getState().user?.STD?.token
    let id = getState().user?.STD?.id
    return new Promise((resolve, reject) => {
      performRequest(`user/students/${id}/`, data, 'PUT', token)
        .then(response => {
          dispatch({
            type: 'EditStudentAPI',
            subtype: 'loading',
          });
          if (response) {
            dispatch({
              type: 'EditStudentAPI',
              subtype: 'success',
            });
          }
          resolve(response);
        })
        .catch(error => {
          dispatch({
            type: 'EditStudentAPI',
            error,
          });
          reject(error);
        });
    });
  };
}

export function GetStudentAPI(data) {
  return function (dispatch) {
    return new Promise((resolve, reject) => {
      performRequest(`user/get-user-profile/`, data, 'POST', null)
        .then(response => {
          dispatch({
            type: 'GetStudentAPI',
            subtype: 'loading',
          });
          if (response) {
            dispatch({
              type: 'GetStudentAPI',
              subtype: 'success',
            });
          }
          resolve(response);
        })
        .catch(error => {
          dispatch({
            type: 'GetStudentAPI',
            error,
          });
          reject(error);
        });
    });
  };
}





export function Logout(data) {
  return async (dispatch, getState) => {
    dispatch({
      type: 'Logout',
      subtype: 'loading',
    });
    dispatch({
      type: 'Logout',
      subtype: 'success',
      token: data,
    });
  };
}
// ---------- course api ----------

export function GetCourseStandardApi(data) {
  // let q = {Filters: [{ "Field": "standard_id__standard_name",  "Value":data?.token?.standard }] }
  return function (dispatch, getState) {
    return new Promise((resolve, reject) => {
      performRequest(`courses/standard`, null, 'GET', data?.token?.token)
        .then(response => {
          dispatch({
            type: 'CourseStandard',
            subtype: 'loading',
          });
          if (response) {
            dispatch({
              type: 'CourseStandard',
              subtype: 'success',
            });
          }
          resolve(response);
        })
        .catch(error => {
          dispatch({
            type: 'CourseStandard',
            error,
          });
          reject(error);
        });
    });
  };
}

export function GetCourseSubjectApi(data) {
  let q = {"standard_id__standard_name": data?.std == undefined ? "a": data?.std?.standard_name}
  return function (dispatch, getState) {
    return new Promise((resolve, reject) => {
      performRequest(`courses/subject?filters=${JSON.stringify(q)}`, null, 'GET', data?.token?.token)
        .then(response => {
          dispatch({
            type: 'CourseSubject',
            subtype: 'loading',
          });
          if (response) {
            dispatch({
              type: 'CourseSubject',
              subtype: 'success',
            });
          }
          resolve(response);
        })
        .catch(error => {
          dispatch({
            type: 'CourseSubject',
            error,
          });
          reject(error);
        });
    });
  };
}

export function GetCourseTopicApi(data) {
  let q = {"subject_id": data?.topicID == undefined ? "a": data?.topicID}
  return function (dispatch, getState) {
    return new Promise((resolve, reject) => {
      performRequest(`courses/topic?filters=${JSON.stringify(q)}`, null, 'GET', data?.token?.token)
        .then(response => {
          dispatch({
            type: 'CourseSubject',
            subtype: 'loading',
          });
          if (response) {
            dispatch({
              type: 'CourseSubject',
              subtype: 'success',
            });
          }
          resolve(response);
        })
        .catch(error => {
          dispatch({
            type: 'CourseSubject',
            error,
          });
          reject(error);
        });
    });
  };
}

export function GetCourseContentApi(data) {
  let q = { "topic_id": data?.topicID == undefined ? "a" : data?.topicID }
  return function (dispatch, getState) {
    return new Promise((resolve, reject) => {
      performRequest(`courses/content?filters=${JSON.stringify(q)}`, null, 'GET', data?.token?.token)
        .then(response => {
          dispatch({
            type: 'CourseSubject',
            subtype: 'loading',
          });
          if (response) {
            dispatch({
              type: 'CourseSubject',
              subtype: 'success',
            });
          }
          resolve(response);
        })
        .catch(error => {
          dispatch({
            type: 'CourseSubject',
            error,
          });
          reject(error);
        });
    });
  };
}

export function PaymentCheckoutAPI(data, token) {
  return function (dispatch) {
    return new Promise((resolve, reject) => {
      performRequest(`payment/checkout/`, data, 'POST', token?.token)
        .then(response => {
          dispatch({
            type: 'PaymentCheckoutAPI',
            subtype: 'loading',
          });
          if (response) {
            dispatch({
              type: 'PaymentCheckoutAPI',
              subtype: 'success',
            });
          }
          resolve(response);
        })
        .catch(error => {
          dispatch({
            type: 'PaymentCheckoutAPI',
            error,
          });
          reject(error);
        });
    });
  };
}

export function ProfileAPi(data) {
  return async (dispatch, getState) => {
    dispatch({
      type: 'ProfileAPi',
      subtype: 'loading',
    });
    dispatch({
      type: 'ProfileAPi',
      subtype: 'success',
      PrfImg: data,
    });
  };
}

export function ProfileAvatarList(data) {
  return function (dispatch) {
    return new Promise((resolve, reject) => {
      performRequest(`user/profileAvatar/`, null, 'GET', null)
        .then(response => {
          dispatch({
            type: 'ProfileAvatarList',
            subtype: 'loading',
          });
          if (response) {
            dispatch({
              type: 'ProfileAvatarList',
              subtype: 'success',
            });
          }
          resolve(response);
        })
        .catch(error => {
          dispatch({
            type: 'ProfileAvatarList',
            error,
          });
          reject(error);
        });
    });
  };
}