'use strict';


var reportServices = angular.module("report.services",[]);

reportServices.factory("studentService",function($http){

	var student = [
  {
    "studentID": "ST12",
    "marks": [
      {
        "year": 2015,
        "typeOfExam": "Series",
        "examName": "Series 1",
        "scores": {
          "maths": {
            "score": 48,
            "total": 50,
            "teacher": {
              "name": "Anto John",
              "contactNumber": "9812312312"
            }
          },
          "biology": {
            "score": 38,
            "total": 50,
            "teacher": {
              "name": "Jessy Joseph",
              "contactNumber": "9812312312"
            }
          },
          "chemistry": {
            "score": 49,
            "total": 50,
            "teacher": {
              "name": "Ajitha KV",
              "contactNumber": "9812312312"
            }
          },
          "physics": {
            "score": 50,
            "total": 50,
            "teacher": {
              "name": "Mini Haripad",
              "contactNumber": "9812312312"
            }
          },
          "English": {
            "score": 44,
            "total": 50,
            "teacher": {
              "name": "philo Thomas",
              "contactNumber": "9812312312"
            }
          }
        }
      },
      {
        "year": 2015,
        "typeOfExam": "Series",
        "examName": "Series 3",
        "scores": {
          "maths": {
            "score": 1,
            "total": 50,
            "teacher": {
              "name": "Anto John",
              "contactNumber": "9812312312"
            }
          },
          "biology": {
            "score": 38,
            "total": 50,
            "teacher": {
              "name": "Jessy Joseph",
              "contactNumber": "9812312312"
            }
          },
          "chemistry": {
            "score": 49,
            "total": 50,
            "teacher": {
              "name": "Ajitha KV",
              "contactNumber": "9812312312"
            }
          },
          "physics": {
            "score": 50,
            "total": 50,
            "teacher": {
              "name": "Mini Haripad",
              "contactNumber": "9812312312"
            }
          },
          "English": {
            "score": 44,
            "total": 50,
            "teacher": {
              "name": "philo Thomas",
              "contactNumber": "9812312312"
            }
          }
        }
      },
      {
        "year": 2015,
        "typeOfExam": "Series",
        "examName": "Series 5",
        "scores": {
          "maths": {
            "score": 2,
            "total": 50,
            "teacher": {
              "name": "Anto John",
              "contactNumber": "9812312312"
            }
          },
          "biology": {
            "score": 38,
            "total": 50,
            "teacher": {
              "name": "Jessy Joseph",
              "contactNumber": "9812312312"
            }
          },
          "chemistry": {
            "score": 49,
            "total": 50,
            "teacher": {
              "name": "Ajitha KV",
              "contactNumber": "9812312312"
            }
          },
          "physics": {
            "score": 50,
            "total": 50,
            "teacher": {
              "name": "Mini Haripad",
              "contactNumber": "9812312312"
            }
          },
          "English": {
            "score": 44,
            "total": 50,
            "teacher": {
              "name": "philo Thomas",
              "contactNumber": "9812312312"
            }
          }
        }
      },
      {
        "year": 2015,
        "typeOfExam": "Series",
        "examName": "Series 2",
        "scores": {
          "maths": {
            "score": 3,
            "total": 50,
            "teacher": {
              "name": "Anto John",
              "contactNumber": "9812312312"
            }
          },
          "biology": {
            "score": 38,
            "total": 50,
            "teacher": {
              "name": "Jessy Joseph",
              "contactNumber": "9812312312"
            }
          },
          "chemistry": {
            "score": 39,
            "total": 50,
            "teacher": {
              "name": "Ajitha KV",
              "contactNumber": "9812312312"
            }
          },
          "physics": {
            "score": 40,
            "total": 50,
            "teacher": {
              "name": "Mini Haripad",
              "contactNumber": "9812312312"
            }
          },
          "English": {
            "score": 34,
            "total": 50,
            "teacher": {
              "name": "philo Thomas",
              "contactNumber": "9812312312"
            }
          }
        }
      }
    ]
  },
  {
    "studentID": "ST13",
    "marks": [
      {
        "year": 2015,
        "typeOfExam": "Series",
        "examName": "Series 1",
        "scores": {
          "maths": {
            "score": 50,
            "total": 50,
            "teacher": {
              "name": "Anto John",
              "contactNumber": "9812312312"
            }
          },
          "biology": {
            "score": 50,
            "total": 50,
            "teacher": {
              "name": "Jessy Joseph",
              "contactNumber": "9812312312"
            }
          },
          "chemistry": {
            "score": 50,
            "total": 50,
            "teacher": {
              "name": "Ajitha KV",
              "contactNumber": "9812312312"
            }
          },
          "physics": {
            "score": 50,
            "total": 50,
            "teacher": {
              "name": "Mini Haripad",
              "contactNumber": "9812312312"
            }
          },
          "English": {
            "score": 44,
            "total": 50,
            "teacher": {
              "name": "philo Thomas",
              "contactNumber": "9812312312"
            }
          }
        }
      },
      {
        "year": 2015,
        "typeOfExam": "Series",
        "examName": "Series 2",
        "scores": {
          "maths": {
            "score": 10,
            "total": 50,
            "teacher": {
              "name": "Anto John",
              "contactNumber": "9812312312"
            }
          },
          "biology": {
            "score": 10,
            "total": 50,
            "teacher": {
              "name": "Jessy Joseph",
              "contactNumber": "9812312312"
            }
          },
          "chemistry": {
            "score": 10,
            "total": 50,
            "teacher": {
              "name": "Ajitha KV",
              "contactNumber": "9812312312"
            }
          },
          "physics": {
            "score": 10,
            "total": 50,
            "teacher": {
              "name": "Mini Haripad",
              "contactNumber": "9812312312"
            }
          },
          "English": {
            "score": 10,
            "total": 50,
            "teacher": {
              "name": "philo Thomas",
              "contactNumber": "9812312312"
            }
          }
        }
      }
    ]
  },
  {
    "studentID": "ST14",
    "marks": [
      {
        "year": 2015,
        "typeOfExam": "Series",
        "examName": "Series 1",
        "scores": {
          "maths": {
            "score": 50,
            "total": 50,
            "teacher": {
              "name": "Anto John",
              "contactNumber": "9812312312"
            }
          },
          "biology": {
            "score": 50,
            "total": 50,
            "teacher": {
              "name": "Jessy Joseph",
              "contactNumber": "9812312312"
            }
          },
          "chemistry": {
            "score": 50,
            "total": 50,
            "teacher": {
              "name": "Ajitha KV",
              "contactNumber": "9812312312"
            }
          },
          "physics": {
            "score": 50,
            "total": 50,
            "teacher": {
              "name": "Mini Haripad",
              "contactNumber": "9812312312"
            }
          },
          "English": {
            "score": 44,
            "total": 50,
            "teacher": {
              "name": "philo Thomas",
              "contactNumber": "9812312312"
            }
          }
        }
      },
      {
        "year": 2015,
        "typeOfExam": "Series",
        "examName": "Series 2",
        "scores": {
          "maths": {
            "score": 10,
            "total": 50,
            "teacher": {
              "name": "Anto John",
              "contactNumber": "9812312312"
            }
          },
          "biology": {
            "score": 10,
            "total": 50,
            "teacher": {
              "name": "Jessy Joseph",
              "contactNumber": "9812312312"
            }
          },
          "chemistry": {
            "score": 10,
            "total": 50,
            "teacher": {
              "name": "Ajitha KV",
              "contactNumber": "9812312312"
            }
          },
          "physics": {
            "score": 10,
            "total": 50,
            "teacher": {
              "name": "Mini Haripad",
              "contactNumber": "9812312312"
            }
          },
          "English": {
            "score": 10,
            "total": 50,
            "teacher": {
              "name": "philo Thomas",
              "contactNumber": "9812312312"
            }
          }
        }
      }
    ]
  },
  {
    "studentID": "ST16",
    "marks": [
      {
        "year": 2015,
        "typeOfExam": "Series",
        "examName": "Series 1",
        "scores": {
          "maths": {
            "score": 50,
            "total": 50,
            "teacher": {
              "name": "Anto John",
              "contactNumber": "9812312312"
            }
          },
          "biology": {
            "score": 50,
            "total": 50,
            "teacher": {
              "name": "Jessy Joseph",
              "contactNumber": "9812312312"
            }
          },
          "chemistry": {
            "score": 50,
            "total": 50,
            "teacher": {
              "name": "Ajitha KV",
              "contactNumber": "9812312312"
            }
          },
          "physics": {
            "score": 50,
            "total": 50,
            "teacher": {
              "name": "Mini Haripad",
              "contactNumber": "9812312312"
            }
          },
          "English": {
            "score": 44,
            "total": 50,
            "teacher": {
              "name": "philo Thomas",
              "contactNumber": "9812312312"
            }
          }
        }
      },
      {
        "year": 2015,
        "typeOfExam": "Series",
        "examName": "Series 1",
        "scores": {
          "maths": {
            "score": 50,
            "total": 50,
            "teacher": {
              "name": "Anto John",
              "contactNumber": "9812312312"
            }
          },
          "biology": {
            "score": 50,
            "total": 50,
            "teacher": {
              "name": "Jessy Joseph",
              "contactNumber": "9812312312"
            }
          },
          "chemistry": {
            "score": 50,
            "total": 50,
            "teacher": {
              "name": "Ajitha KV",
              "contactNumber": "9812312312"
            }
          },
          "physics": {
            "score": 50,
            "total": 50,
            "teacher": {
              "name": "Mini Haripad",
              "contactNumber": "9812312312"
            }
          },
          "English": {
            "score": 44,
            "total": 50,
            "teacher": {
              "name": "philo Thomas",
              "contactNumber": "9812312312"
            }
          }
        }
      },
      {
        "year": 2015,
        "typeOfExam": "Series",
        "examName": "Series 2",
        "scores": {
          "maths": {
            "score": 10,
            "total": 50,
            "teacher": {
              "name": "Anto John",
              "contactNumber": "9812312312"
            }
          },
          "biology": {
            "score": 10,
            "total": 50,
            "teacher": {
              "name": "Jessy Joseph",
              "contactNumber": "9812312312"
            }
          },
          "chemistry": {
            "score": 10,
            "total": 50,
            "teacher": {
              "name": "Ajitha KV",
              "contactNumber": "9812312312"
            }
          },
          "physics": {
            "score": 10,
            "total": 50,
            "teacher": {
              "name": "Mini Haripad",
              "contactNumber": "9812312312"
            }
          },
          "English": {
            "score": 10,
            "total": 50,
            "teacher": {
              "name": "philo Thomas",
              "contactNumber": "9812312312"
            }
          }
        }
      }
    ]
  }
];


var getStudentTableData = function(){

  var url = "http://localhost:3000/student/adminTable";

  return $http.get(url);

}






return {
	getStudentTableData : getStudentTableData
}
});