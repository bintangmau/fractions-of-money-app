// MODULE
import React, { useState } from 'react'

function App () {

  const [ text, setText ] = useState(null)
  const [ status, setStatus ] = useState('')
  const [ money, setMoney ] = useState(0)
  const [ listMoney, setListMoney ] = useState([])
  const [ sisaMoney, setSisaMoney ] = useState(0)

  const isPalindrome = (str) => {
    var string = str;
    var kataDepan = []
    var kataBelakang = []
    string.replaceAll(",", "")
    for (let i = 0; i < (string.length / 2) + 1; i++) {
      if(string[i] !== ',') {
        kataDepan.push(string[i])
      } else if(string[i] === ',') {
        var arr = [...kataDepan]
        arr.splice(i, 1);
        string = string.replace(string[i], "")
      }
       if(string[string.length - 1 - i] !== ',') {
        kataBelakang.push(string[string.length - 1 - i])
      }  
    }
    // console.log(kataDepan)
    const kataDpn = kataDepan.toString()
    const kataBlg = kataBelakang.toString()
    // console.log(kataDpn + '    =====  ' + kataBlg)
    if(str.length === 0) {
      setStatus('')
    } else if(kataDpn === kataBlg) {
      setStatus('true')
    } else {
      setStatus('false')
    }
  }

  const pecahUang = () => {
    setSisaMoney(0)
    if(money >= 100000) {
      const data = []
      var qty1 = parseInt(money / 100000)
      var sisa = money - 100000 * qty1

      data.push({
        value: 100000,
        qty: qty1
      })
  
      if(sisa >= 50000) {
        data.push({ value: 50000, qty: 1})
        sisa = sisa - 50000
        
        if(sisa >= 20000) {
          data.push({ value: 20000, qty: parseInt(sisa / 20000) })
          sisa = sisa - 20000 * parseInt(sisa / 20000)
          
          if(sisa >= 10000) {
            data.push({ value: 10000, qty: 1 })
            sisa = sisa - 10000
           
            if(sisa >= 5000) {
              data.push({ value: 5000, qty: 1 })
              sisa = sisa - 5000
          
              if(sisa >= 2000) {
                data.push({ value: 2000, qty: parseInt(sisa / 2000) })
                sisa = sisa - 2000 * parseInt(sisa / 2000)
                
                if(sisa >= 1000) {
                  data.push({ value: 1000, qty: 1 })
                  sisa = sisa - 1000
              
                  if(sisa >= 500) {
                    data.push({ value: 500, qty: 1 })
                    sisa = sisa - 500
                  
                    if(sisa >= 200) {
                      data.push({ value: 200, qty: parseInt(sisa / 200) })
                      sisa = sisa - 200 * parseInt(sisa / 200)
      
                      if(sisa >= 100) {
                        data.push({ value: 100, qty: 1 })
                        sisa = sisa - 100
      
                        setSisaMoney(sisa)
                      } else {
                        setSisaMoney(sisa)
                      }
                    } else if(sisa >= 100) {
                      data.push({ value: 100, qty: 1 })
                      sisa = sisa - 100
      
                      setSisaMoney(sisa)
                    } else {
                      setSisaMoney(sisa)
                    }
                  } else if(sisa >= 200) {
                    data.push({ value: 200, qty: parseInt(sisa / 200) })
                    sisa = sisa - 200 * parseInt(sisa / 200)
      
                    if(sisa >= 100) {
                      data.push({ value: 100, qty: 1 })
                      sisa = sisa - 100
      
                      setSisaMoney(sisa)
                    } else {
                      setSisaMoney(sisa)
                    }
                  } else if(sisa >= 100) {
                    data.push({ value: 100, qty: 1 })
                    sisa = sisa - 100
      
                    setSisaMoney(sisa)
                  } else {
                    setSisaMoney(sisa)
                  }
                } else if(sisa >= 500) {
                  data.push({ value: 500, qty: 1 })
                  sisa = sisa - 500
        
                  if(sisa >= 200) {
                    data.push({ value: 200, qty: parseInt(sisa / 200) })
                    sisa = sisa - 200 * parseInt(sisa / 200)
        
                    if(sisa >= 100) {
                      data.push({ value: 100, qty: 1 })
                      sisa = sisa - 100
        
                      setSisaMoney(sisa)
                    } else {
                      setSisaMoney(sisa)
                    }
                  } else if(sisa >= 100) {
                    data.push({ value: 100, qty: 1 })
                    sisa = sisa - 100
        
                    setSisaMoney(sisa)
                  } else {
                    setSisaMoney(sisa)
                  }
                } else if(sisa >= 200) {
                  data.push({ value: 200, qty: parseInt(sisa / 200) })
                  sisa = sisa - 200 * parseInt(sisa / 200)
        
                  if(sisa >= 100) {
                    data.push({ value: 100, qty: 1 })
                    sisa = sisa - 100
        
                    setSisaMoney(sisa)
                  } else {
                    setSisaMoney(sisa)
                  }
                } else if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
                  
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 1000) {
                data.push({ value: 1000, qty: 1 })
                sisa = sisa - 1000
            
                if(sisa >= 500) {
                  data.push({ value: 500, qty: 1 })
                  sisa = sisa - 500
                
                  if(sisa >= 200) {
                    data.push({ value: 200, qty: parseInt(sisa / 200) })
                    sisa = sisa - 200 * parseInt(sisa / 200)
    
                    if(sisa >= 100) {
                      data.push({ value: 100, qty: 1 })
                      sisa = sisa - 100
    
                      setSisaMoney(sisa)
                    } else {
                      setSisaMoney(sisa)
                    }
                  } else if(sisa >= 100) {
                    data.push({ value: 100, qty: 1 })
                    sisa = sisa - 100
    
                    setSisaMoney(sisa)
                  } else {
                    setSisaMoney(sisa)
                  }
                } else if(sisa >= 200) {
                  data.push({ value: 200, qty: parseInt(sisa / 200) })
                  sisa = sisa - 200 * parseInt(sisa / 200)
    
                  if(sisa >= 100) {
                    data.push({ value: 100, qty: 1 })
                    sisa = sisa - 100
    
                    setSisaMoney(sisa)
                  } else {
                    setSisaMoney(sisa)
                  }
                } else if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
    
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 500) {
                data.push({ value: 500, qty: 1 })
                sisa = sisa - 500
      
                if(sisa >= 200) {
                  data.push({ value: 200, qty: parseInt(sisa / 200) })
                  sisa = sisa - 200 * parseInt(sisa / 200)
      
                  if(sisa >= 100) {
                    data.push({ value: 100, qty: 1 })
                    sisa = sisa - 100
      
                    setSisaMoney(sisa)
                  } else {
                    setSisaMoney(sisa)
                  }
                } else if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
      
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 200) {
                data.push({ value: 200, qty: parseInt(sisa / 200) })
                sisa = sisa - 200 * parseInt(sisa / 200)
      
                if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
      
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
                
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 2000) {
              data.push({ value: 2000, qty: parseInt(sisa / 2000) })
              sisa = sisa - 2000 * parseInt(sisa / 2000)
              
              if(sisa >= 1000) {
                data.push({ value: 1000, qty: 1 })
                sisa = sisa - 1000
               
                if(sisa >= 500) {
                  data.push({ value: 500, qty: 1 })
                  sisa = sisa - 500
                 
                  if(sisa >= 200) {
                    data.push({ value: 200, qty: parseInt(sisa / 200) })
                    sisa = sisa - 200 * parseInt(sisa / 200)
    
                    if(sisa >= 100) {
                      data.push({ value: 100, qty: 1 })
                      sisa = sisa - 100
    
                      setSisaMoney(sisa)
                    } else {
                      setSisaMoney(sisa)
                    }
                  } else if(sisa >= 100) {
                    data.push({ value: 100, qty: 1 })
                    sisa = sisa - 100
    
                    setSisaMoney(sisa)
                  } else {
                    setSisaMoney(sisa)
                  }
                } else if(sisa >= 200) {
                  data.push({ value: 200, qty: parseInt(sisa / 200) })
                  sisa = sisa - 200 * parseInt(sisa / 200)
               
                  if(sisa >= 100) {
                    data.push({ value: 100, qty: 1 })
                    sisa = sisa - 100
    
                    setSisaMoney(sisa)
                  } else {
                    setSisaMoney(sisa)
                  }   
                } else if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
    
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 500) {
                data.push({ value: 500, qty: 1 })
                sisa = sisa - 500
               
                if(sisa >= 200) {
                  data.push({ value: 200, qty: parseInt(sisa / 200) })
                  sisa = sisa - 200 * parseInt(sisa / 200)
    
                  if(sisa >= 100) {
                    data.push({ value: 100, qty: 1 })
                    sisa = sisa - 100 
    
                    setSisaMoney(sisa)
                  } else {
                    setSisaMoney(sisa)
                  }
                } else if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
    
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 200) {
                data.push({ value: 200, qty: parseInt(sisa / 200) })
                sisa = sisa - 200 * parseInt(sisa / 200)
               
                if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
    
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
    
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 1000) {
              data.push({ value: 1000, qty: 1 })
              sisa = sisa - 1000
    
              if(sisa >= 500) {
                data.push({ value: 500, qty: 1 })
                sisa = sisa - 500
          
                if(sisa >= 200) {
                  data.push({ value: 200, qty: parseInt(sisa / 200) })
                  sisa = sisa - 200 * parseInt(sisa / 200)
               
                  if(sisa >= 100) {
                    data.push({ value: 100, qty: 1 })
                    sisa = sisa - 100
    
                    setSisaMoney(sisa)
                  } else {
                    setSisaMoney(sisa)
                  }
                } else if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
    
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 200) {
                data.push({ value: 200, qty: parseInt(sisa / 200) })
                sisa = sisa - 200 * parseInt(sisa / 200)
    
                if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
    
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
    
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 500) {
              data.push({ value: 500, qty: 1 })
              sisa = sisa - 500
    
              if(sisa >= 200) {
                data.push({ value: 200, qty: parseInt(sisa / 200) })
                sisa = sisa - 200 * parseInt(sisa / 200)
    
                if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
    
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
    
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa / 200)
    
              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
    
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
              
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 5000) {
            data.push({ value: 5000, qty: 1 })
            sisa = sisa - 5000
        
            if(sisa >= 2000) {  
              data.push({ value: 2000, qty: parseInt(sisa / 2000) })
              sisa = sisa - 2000 * parseInt(sisa / 2000)
              
              if(sisa >= 1000) {
                data.push({ value: 1000, qty: 1})
                sisa = sisa - 1000
                
                if(sisa >= 500) {
                  data.push({ value: 500, qty: 1 })
                  sisa = sisa - 500
               
                  if(sisa >= 200) {
                    data.push({ value: 200, qty: parseInt(sisa / 200) })
                    sisa = sisa - 200 * parseInt(sisa / 200)
                    
                    if(sisa >= 100) {
                      data.push({ value: 100, qty: 1 })
                      sisa = sisa - 100
          
                      setSisaMoney(sisa)
                    } else {
                      setSisaMoney(sisa)
                    }
                  } else if(sisa >= 100) {
                    data.push({ value: 100, qty: 1}) 
                    sisa = sisa - 100
          
                    setSisaMoney(sisa)
                  } else {
                    setSisaMoney(sisa)
                  }
                }  else if(sisa >= 200) {
                  data.push({ value: 200, qty: parseInt(sisa / 200) })
                  sisa = sisa - 200 * parseInt(sisa / 200)
          
                  if(sisa >= 100) {
                    data.push({ value: 100, qty: 1 })
                    sisa = sisa - 100
        
                    setSisaMoney(sisa)
                  } else {
                    setSisaMoney(sisa)
                  }
                } else if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
        
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 500) {
                data.push({ value: 500, qty: 1 })
                sisa = sisa - 500
      
                if(sisa >= 200) {
                  data.push({ value: 200, qty: parseInt(sisa / 200) })
                  sisa = sisa - 200 * parseInt(sisa / 200)
      
                  if(sisa >= 100) {
                    data.push({ value: 100, qty: 1 })
                    sisa = sisa - 100
      
                    setSisaMoney(sisa)
                  } else {
                    setSisaMoney(sisa)
                  }
                } else if(sisa >= 100) {
                  data.push({ value: 100, qty: 1}) 
                  sisa = sisa - 100
                  
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 200) {
                data.push({ value: 200, qty: parseInt(sisa / 200) })
                sisa = sisa - 200 * parseInt(sisa / 200)
               
                if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
      
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
      
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 1000) {
              data.push({ value: 1000, qty: 1 })
              sisa = sisa - 1000
            
              if(sisa >= 500) {
                data.push({ value: 500, qty: 1 })
                sisa = sisa - 500
          
                if(sisa >= 200) {
                  data.push({ value: 200, qty: parseInt(sisa / 200) })
                  sisa = sisa - 200 * parseInt(sisa / 200)
    
                  if(sisa >= 100) {
                    data.push({ value: 100, qty: 1 })
                    sisa = sisa - 100
    
                    setSisaMoney(sisa)
                  } else {
                    setSisaMoney(sisa)
                  }
                } else if(sisa >= 100) {
                  data.push({ value: 100, qty: 1}) 
                  sisa = sisa - 100
                  
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 200) {
                data.push({ value: 200, qty: parseInt(sisa / 200) })
                sisa = sisa - 200
    
                if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
    
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
    
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 500) {
              data.push({ value: 500, qty: 1 })
              sisa = sisa - 500
    
              if(sisa >= 200) {
                data.push({ value: 200, qty: parseInt(sisa / 200) })
                sisa = sisa - 200 * parseInt(sisa / 200)
    
                if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
    
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 100) {
                data.push({ value: 100, qty: 1}) 
                sisa = sisa - 100
                
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa / 200)
     
              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
    
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
    
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 2000) {  
            data.push({ value: 2000, qty: parseInt(sisa / 2000) })
            sisa = sisa - 2000 * parseInt(sisa / 2000)
         
            if(sisa >= 1000) {
              data.push({ value: 1000, qty: 1})
              sisa = sisa - 1000
             
              if(sisa >= 500) {
                data.push({ value: 500, qty: 1 })
                sisa = sisa - 500
         
                if(sisa >= 200) {
                  data.push({ value: 200, qty: parseInt(sisa / 200) })
                  sisa = sisa - 200 * parseInt(sisa / 200)
        
                  if(sisa >= 100) {
                    data.push({ value: 100, qty: 1 })
                    sisa = sisa - 100
        
                    setSisaMoney(sisa)
                  } else {
                    setSisaMoney(sisa)
                  }
                } else if(sisa >= 100) {
                  data.push({ value: 100, qty: 1}) 
                  sisa = sisa - 100
        
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 200) {
                data.push({ value: 200, qty: parseInt(sisa / 200) })
                sisa = sisa - 200 * parseInt(sisa / 200)
             
                if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
        
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
                
                setSisaMoney(sisa)
              } else {  
                setSisaMoney(sisa)
              }
            } else if(sisa >= 500) {
              data.push({ value: 500, qty: 1 })
              sisa = sisa - 500
        
              if(sisa >= 200) {
                data.push({ value: 200, qty: parseInt(sisa / 200) })
                sisa = sisa - 200 * parseInt(sisa / 200)
      
                if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
      
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 100) {
                data.push({ value: 100, qty: 1}) 
                sisa = sisa - 100
      
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa / 200)
      
              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
      
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
              
              setSisaMoney(sisa)
            } else {  
              setSisaMoney(sisa)
            }
          } else if(sisa >= 1000) {
            data.push({ value: 1000, qty: 1 })
            sisa = sisa - 1000
       
            if(sisa >= 500) {
              data.push({ value: 500, qty: 1 })
              sisa = sisa - 500
              
              if(sisa >= 200) {
                data.push({ value: 200, qty: parseInt(sisa / 200) })
                sisa = sisa - 200 * parseInt(sisa/ 200)
             
                if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
      
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 100) {
                data.push({ value: 100, qty: 1}) 
                sisa = sisa - 100
      
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa / 200)
      
              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
      
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
            
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 500) {
            data.push({ value: 500, qty: 1 })
            sisa = sisa - 500
      
            if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa / 200)
    
              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
    
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1}) 
              sisa = sisa - 100
    
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 200) {
            data.push({ value: 200, qty: parseInt(sisa / 200) })
            sisa = sisa - 200 * parseInt(sisa / 200)
    
            if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
    
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100
            
            setSisaMoney(sisa)
          } else {
            
            setSisaMoney(sisa)
          }
        } else if(sisa >= 10000) {
          data.push({ value: 10000, qty: 1 })
          sisa = sisa - 10000
         
          if(sisa >= 5000) {
            data.push({ value: 5000, qty: 1 })
            sisa = sisa - 5000
        
            if(sisa >= 2000) {
              data.push({ value: 2000, qty: parseInt(sisa / 2000) })
              sisa = sisa - 2000 * parseInt(sisa / 2000)
              
              if(sisa >= 1000) {
                data.push({ value: 1000, qty: 1 })
                sisa = sisa - 1000
            
                if(sisa >= 500) {
                  data.push({ value: 500, qty: 1 })
                  sisa = sisa - 500
                
                  if(sisa >= 200) {
                    data.push({ value: 200, qty: parseInt(sisa / 200) })
                    sisa = sisa - 200 * parseInt(sisa / 200)
    
                    if(sisa >= 100) {
                      data.push({ value: 100, qty: 1 })
                      sisa = sisa - 100
    
                      setSisaMoney(sisa)
                    } else {
                      setSisaMoney(sisa)
                    }
                  } else if(sisa >= 100) {
                    data.push({ value: 100, qty: 1 })
                    sisa = sisa - 100
    
                    setSisaMoney(sisa)
                  } else {
                    setSisaMoney(sisa)
                  }
                } else if(sisa >= 200) {
                  data.push({ value: 200, qty: parseInt(sisa / 200) })
                  sisa = sisa - 200 * parseInt(sisa / 200)
    
                  if(sisa >= 100) {
                    data.push({ value: 100, qty: 1 })
                    sisa = sisa - 100
    
                    setSisaMoney(sisa)
                  } else {
                    setSisaMoney(sisa)
                  }
                } else if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
    
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 500) {
                data.push({ value: 500, qty: 1 })
                sisa = sisa - 500
      
                if(sisa >= 200) {
                  data.push({ value: 200, qty: parseInt(sisa / 200) })
                  sisa = sisa - 200 * parseInt(sisa / 200)
      
                  if(sisa >= 100) {
                    data.push({ value: 100, qty: 1 })
                    sisa = sisa - 100
      
                    setSisaMoney(sisa)
                  } else {
                    setSisaMoney(sisa)
                  }
                } else if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
      
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 200) {
                data.push({ value: 200, qty: parseInt(sisa / 200) })
                sisa = sisa - 200 * parseInt(sisa / 200)
      
                if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
      
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
                
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 1000) {
              data.push({ value: 1000, qty: 1 })
              sisa = sisa - 1000
          
              if(sisa >= 500) {
                data.push({ value: 500, qty: 1 })
                sisa = sisa - 500
              
                if(sisa >= 200) {
                  data.push({ value: 200, qty: parseInt(sisa / 200) })
                  sisa = sisa - 200 * parseInt(sisa / 200)
  
                  if(sisa >= 100) {
                    data.push({ value: 100, qty: 1 })
                    sisa = sisa - 100
  
                    setSisaMoney(sisa)
                  } else {
                    setSisaMoney(sisa)
                  }
                } else if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
  
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 200) {
                data.push({ value: 200, qty: parseInt(sisa / 200) })
                sisa = sisa - 200 * parseInt(sisa / 200)
  
                if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
  
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
  
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 500) {
              data.push({ value: 500, qty: 1 })
              sisa = sisa - 500
    
              if(sisa >= 200) {
                data.push({ value: 200, qty: parseInt(sisa / 200) })
                sisa = sisa - 200 * parseInt(sisa / 200)
    
                if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
    
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
    
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa / 200)
    
              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
    
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
              
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 2000) {
            data.push({ value: 2000, qty: parseInt(sisa / 2000) })
            sisa = sisa - 2000 * parseInt(sisa / 2000)
            
            if(sisa >= 1000) {
              data.push({ value: 1000, qty: 1 })
              sisa = sisa - 1000
             
              if(sisa >= 500) {
                data.push({ value: 500, qty: 1 })
                sisa = sisa - 500
               
                if(sisa >= 200) {
                  data.push({ value: 200, qty: parseInt(sisa / 200) })
                  sisa = sisa - 200 * parseInt(sisa / 200)
  
                  if(sisa >= 100) {
                    data.push({ value: 100, qty: 1 })
                    sisa = sisa - 100
  
                    setSisaMoney(sisa)
                  } else {
                    setSisaMoney(sisa)
                  }
                } else if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
  
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 200) {
                data.push({ value: 200, qty: parseInt(sisa / 200) })
                sisa = sisa - 200 * parseInt(sisa / 200)
             
                if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
  
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }   
              } else if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
  
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 500) {
              data.push({ value: 500, qty: 1 })
              sisa = sisa - 500
             
              if(sisa >= 200) {
                data.push({ value: 200, qty: parseInt(sisa / 200) })
                sisa = sisa - 200 * parseInt(sisa / 200)
  
                if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100 
  
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
  
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa / 200)
             
              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
  
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
  
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 1000) {
            data.push({ value: 1000, qty: 1 })
            sisa = sisa - 1000
  
            if(sisa >= 500) {
              data.push({ value: 500, qty: 1 })
              sisa = sisa - 500
        
              if(sisa >= 200) {
                data.push({ value: 200, qty: parseInt(sisa / 200) })
                sisa = sisa - 200 * parseInt(sisa / 200)
             
                if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
  
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
  
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa / 200)
  
              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
  
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
  
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 500) {
            data.push({ value: 500, qty: 1 })
            sisa = sisa - 500
  
            if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa / 200)
  
              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
  
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
  
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 200) {
            data.push({ value: 200, qty: parseInt(sisa / 200) })
            sisa = sisa - 200 * parseInt(sisa / 200)
  
            if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
  
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100
            
            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 5000) {
          data.push({ value: 5000, qty: 1 })
          sisa = sisa - 5000
      
          if(sisa >= 2000) {  
            data.push({ value: 2000, qty: parseInt(sisa / 2000) })
            sisa = sisa - 2000 * parseInt(sisa / 2000)
            
            if(sisa >= 1000) {
              data.push({ value: 1000, qty: 1})
              sisa = sisa - 1000
              
              if(sisa >= 500) {
                data.push({ value: 500, qty: 1 })
                sisa = sisa - 500
             
                if(sisa >= 200) {
                  data.push({ value: 200, qty: parseInt(sisa / 200) })
                  sisa = sisa - 200 * parseInt(sisa / 200)
                  
                  if(sisa >= 100) {
                    data.push({ value: 100, qty: 1 })
                    sisa = sisa - 100
        
                    setSisaMoney(sisa)
                  } else {
                    setSisaMoney(sisa)
                  }
                } else if(sisa >= 100) {
                  data.push({ value: 100, qty: 1}) 
                  sisa = sisa - 100
        
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              }  else if(sisa >= 200) {
                data.push({ value: 200, qty: parseInt(sisa / 200) })
                sisa = sisa - 200 * parseInt(sisa / 200)
        
                if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
      
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
      
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 500) {
              data.push({ value: 500, qty: 1 })
              sisa = sisa - 500
    
              if(sisa >= 200) {
                data.push({ value: 200, qty: parseInt(sisa / 200) })
                sisa = sisa - 200 * parseInt(sisa / 200)
    
                if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
    
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 100) {
                data.push({ value: 100, qty: 1}) 
                sisa = sisa - 100
                
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa / 200)
             
              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
    
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
    
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 1000) {
            data.push({ value: 1000, qty: 1 })
            sisa = sisa - 1000
          
            if(sisa >= 500) {
              data.push({ value: 500, qty: 1 })
              sisa = sisa - 500
        
              if(sisa >= 200) {
                data.push({ value: 200, qty: parseInt(sisa / 200) })
                sisa = sisa - 200 * parseInt(sisa / 200)
  
                if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
  
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 100) {
                data.push({ value: 100, qty: 1}) 
                sisa = sisa - 100
                
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200
  
              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
  
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
  
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 500) {
            data.push({ value: 500, qty: 1 })
            sisa = sisa - 500
  
            if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa / 200)
  
              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
  
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1}) 
              sisa = sisa - 100
              
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 200) {
            data.push({ value: 200, qty: parseInt(sisa / 200) })
            sisa = sisa - 200 * parseInt(sisa / 200)
   
            if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
  
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100
  
            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 2000) {  
          data.push({ value: 2000, qty: parseInt(sisa / 2000) })
          sisa = sisa - 2000 * parseInt(sisa / 2000)
       
          if(sisa >= 1000) {
            data.push({ value: 1000, qty: 1})
            sisa = sisa - 1000
           
            if(sisa >= 500) {
              data.push({ value: 500, qty: 1 })
              sisa = sisa - 500
       
              if(sisa >= 200) {
                data.push({ value: 200, qty: parseInt(sisa / 200) })
                sisa = sisa - 200 * parseInt(sisa / 200)
      
                if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
      
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 100) {
                data.push({ value: 100, qty: 1}) 
                sisa = sisa - 100
      
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa / 200)
           
              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
      
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
              
              setSisaMoney(sisa)
            } else {  
              setSisaMoney(sisa)
            }
          } else if(sisa >= 500) {
            data.push({ value: 500, qty: 1 })
            sisa = sisa - 500
      
            if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa / 200)
    
              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
    
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1}) 
              sisa = sisa - 100
    
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 200) {
            data.push({ value: 200, qty: parseInt(sisa / 200) })
            sisa = sisa - 200 * parseInt(sisa / 200)
    
            if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
    
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100
            
            setSisaMoney(sisa)
          } else {  
            setSisaMoney(sisa)
          }
        } else if(sisa >= 1000) {
          data.push({ value: 1000, qty: 1 })
          sisa = sisa - 1000
     
          if(sisa >= 500) {
            data.push({ value: 500, qty: 1 })
            sisa = sisa - 500
            
            if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa/ 200)
           
              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
    
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1}) 
              sisa = sisa - 100
    
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 200) {
            data.push({ value: 200, qty: parseInt(sisa / 200) })
            sisa = sisa - 200 * parseInt(sisa / 200)
    
            if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
    
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100
          
            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 500) {
          data.push({ value: 500, qty: 1 })
          sisa = sisa - 500
    
          if(sisa >= 200) {
            data.push({ value: 200, qty: parseInt(sisa / 200) })
            sisa = sisa - 200 * parseInt(sisa / 200)
  
            if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
  
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 100) {
            data.push({ value: 100, qty: 1}) 
            sisa = sisa - 100
  
            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 200) {
          data.push({ value: 200, qty: parseInt(sisa / 200) })
          sisa = sisa - 200 * parseInt(sisa / 200)
  
          if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100
  
            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 100) {
          data.push({ value: 100, qty: 1 })
          sisa = sisa - 100
          
          setSisaMoney(sisa)
        } else {
          
          setSisaMoney(sisa)
        }
      } else if(sisa >= 20000) {
        data.push({ value: 20000, qty: parseInt(sisa / 20000) })
        sisa = sisa - 20000 * parseInt(sisa / 20000)
        
        if(sisa >= 10000) {
          data.push({ value: 10000, qty: 1 })
          sisa = sisa - 10000
         
          if(sisa >= 5000) {
            data.push({ value: 5000, qty: 1 })
            sisa = sisa - 5000
        
            if(sisa >= 2000) {
              data.push({ value: 2000, qty: parseInt(sisa / 2000) })
              sisa = sisa - 2000 * parseInt(sisa / 2000)
              
              if(sisa >= 1000) {
                data.push({ value: 1000, qty: 1 })
                sisa = sisa - 1000
            
                if(sisa >= 500) {
                  data.push({ value: 500, qty: 1 })
                  sisa = sisa - 500
                
                  if(sisa >= 200) {
                    data.push({ value: 200, qty: parseInt(sisa / 200) })
                    sisa = sisa - 200 * parseInt(sisa / 200)
    
                    if(sisa >= 100) {
                      data.push({ value: 100, qty: 1 })
                      sisa = sisa - 100
    
                      setSisaMoney(sisa)
                    } else {
                      setSisaMoney(sisa)
                    }
                  } else if(sisa >= 100) {
                    data.push({ value: 100, qty: 1 })
                    sisa = sisa - 100
    
                    setSisaMoney(sisa)
                  } else {
                    setSisaMoney(sisa)
                  }
                } else if(sisa >= 200) {
                  data.push({ value: 200, qty: parseInt(sisa / 200) })
                  sisa = sisa - 200 * parseInt(sisa / 200)
    
                  if(sisa >= 100) {
                    data.push({ value: 100, qty: 1 })
                    sisa = sisa - 100
    
                    setSisaMoney(sisa)
                  } else {
                    setSisaMoney(sisa)
                  }
                } else if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
    
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 500) {
                data.push({ value: 500, qty: 1 })
                sisa = sisa - 500
      
                if(sisa >= 200) {
                  data.push({ value: 200, qty: parseInt(sisa / 200) })
                  sisa = sisa - 200 * parseInt(sisa / 200)
      
                  if(sisa >= 100) {
                    data.push({ value: 100, qty: 1 })
                    sisa = sisa - 100
      
                    setSisaMoney(sisa)
                  } else {
                    setSisaMoney(sisa)
                  }
                } else if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
      
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 200) {
                data.push({ value: 200, qty: parseInt(sisa / 200) })
                sisa = sisa - 200 * parseInt(sisa / 200)
      
                if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
      
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
                
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 1000) {
              data.push({ value: 1000, qty: 1 })
              sisa = sisa - 1000
          
              if(sisa >= 500) {
                data.push({ value: 500, qty: 1 })
                sisa = sisa - 500
              
                if(sisa >= 200) {
                  data.push({ value: 200, qty: parseInt(sisa / 200) })
                  sisa = sisa - 200 * parseInt(sisa / 200)
  
                  if(sisa >= 100) {
                    data.push({ value: 100, qty: 1 })
                    sisa = sisa - 100
  
                    setSisaMoney(sisa)
                  } else {
                    setSisaMoney(sisa)
                  }
                } else if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
  
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 200) {
                data.push({ value: 200, qty: parseInt(sisa / 200) })
                sisa = sisa - 200 * parseInt(sisa / 200)
  
                if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
  
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
  
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 500) {
              data.push({ value: 500, qty: 1 })
              sisa = sisa - 500
    
              if(sisa >= 200) {
                data.push({ value: 200, qty: parseInt(sisa / 200) })
                sisa = sisa - 200 * parseInt(sisa / 200)
    
                if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
    
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
    
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa / 200)
    
              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
    
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
              
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 2000) {
            data.push({ value: 2000, qty: parseInt(sisa / 2000) })
            sisa = sisa - 2000 * parseInt(sisa / 2000)
            
            if(sisa >= 1000) {
              data.push({ value: 1000, qty: 1 })
              sisa = sisa - 1000
             
              if(sisa >= 500) {
                data.push({ value: 500, qty: 1 })
                sisa = sisa - 500
               
                if(sisa >= 200) {
                  data.push({ value: 200, qty: parseInt(sisa / 200) })
                  sisa = sisa - 200 * parseInt(sisa / 200)
  
                  if(sisa >= 100) {
                    data.push({ value: 100, qty: 1 })
                    sisa = sisa - 100
  
                    setSisaMoney(sisa)
                  } else {
                    setSisaMoney(sisa)
                  }
                } else if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
  
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 200) {
                data.push({ value: 200, qty: parseInt(sisa / 200) })
                sisa = sisa - 200 * parseInt(sisa / 200)
             
                if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
  
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }   
              } else if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
  
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 500) {
              data.push({ value: 500, qty: 1 })
              sisa = sisa - 500
             
              if(sisa >= 200) {
                data.push({ value: 200, qty: parseInt(sisa / 200) })
                sisa = sisa - 200 * parseInt(sisa / 200)
  
                if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100 
  
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
  
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa / 200)
             
              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
  
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
  
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 1000) {
            data.push({ value: 1000, qty: 1 })
            sisa = sisa - 1000
  
            if(sisa >= 500) {
              data.push({ value: 500, qty: 1 })
              sisa = sisa - 500
        
              if(sisa >= 200) {
                data.push({ value: 200, qty: parseInt(sisa / 200) })
                sisa = sisa - 200 * parseInt(sisa / 200)
             
                if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
  
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
  
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa / 200)
  
              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
  
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
  
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 500) {
            data.push({ value: 500, qty: 1 })
            sisa = sisa - 500
  
            if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa / 200)
  
              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
  
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
  
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 200) {
            data.push({ value: 200, qty: parseInt(sisa / 200) })
            sisa = sisa - 200 * parseInt(sisa / 200)
  
            if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
  
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100
            
            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 5000) {
          data.push({ value: 5000, qty: 1 })
          sisa = sisa - 5000
      
          if(sisa >= 2000) {  
            data.push({ value: 2000, qty: parseInt(sisa / 2000) })
            sisa = sisa - 2000 * parseInt(sisa / 2000)
            
            if(sisa >= 1000) {
              data.push({ value: 1000, qty: 1})
              sisa = sisa - 1000
              
              if(sisa >= 500) {
                data.push({ value: 500, qty: 1 })
                sisa = sisa - 500
             
                if(sisa >= 200) {
                  data.push({ value: 200, qty: parseInt(sisa / 200) })
                  sisa = sisa - 200 * parseInt(sisa / 200)
                  
                  if(sisa >= 100) {
                    data.push({ value: 100, qty: 1 })
                    sisa = sisa - 100
        
                    setSisaMoney(sisa)
                  } else {
                    setSisaMoney(sisa)
                  }
                } else if(sisa >= 100) {
                  data.push({ value: 100, qty: 1}) 
                  sisa = sisa - 100
        
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              }  else if(sisa >= 200) {
                data.push({ value: 200, qty: parseInt(sisa / 200) })
                sisa = sisa - 200 * parseInt(sisa / 200)
        
                if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
      
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
      
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 500) {
              data.push({ value: 500, qty: 1 })
              sisa = sisa - 500
    
              if(sisa >= 200) {
                data.push({ value: 200, qty: parseInt(sisa / 200) })
                sisa = sisa - 200 * parseInt(sisa / 200)
    
                if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
    
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 100) {
                data.push({ value: 100, qty: 1}) 
                sisa = sisa - 100
                
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa / 200)
             
              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
    
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
    
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 1000) {
            data.push({ value: 1000, qty: 1 })
            sisa = sisa - 1000
          
            if(sisa >= 500) {
              data.push({ value: 500, qty: 1 })
              sisa = sisa - 500
        
              if(sisa >= 200) {
                data.push({ value: 200, qty: parseInt(sisa / 200) })
                sisa = sisa - 200 * parseInt(sisa / 200)
  
                if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
  
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 100) {
                data.push({ value: 100, qty: 1}) 
                sisa = sisa - 100
                
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200
  
              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
  
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
  
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 500) {
            data.push({ value: 500, qty: 1 })
            sisa = sisa - 500
  
            if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa / 200)
  
              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
  
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1}) 
              sisa = sisa - 100
              
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 200) {
            data.push({ value: 200, qty: parseInt(sisa / 200) })
            sisa = sisa - 200 * parseInt(sisa / 200)
   
            if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
  
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100
  
            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 2000) {  
          data.push({ value: 2000, qty: parseInt(sisa / 2000) })
          sisa = sisa - 2000 * parseInt(sisa / 2000)
       
          if(sisa >= 1000) {
            data.push({ value: 1000, qty: 1})
            sisa = sisa - 1000
           
            if(sisa >= 500) {
              data.push({ value: 500, qty: 1 })
              sisa = sisa - 500
       
              if(sisa >= 200) {
                data.push({ value: 200, qty: parseInt(sisa / 200) })
                sisa = sisa - 200 * parseInt(sisa / 200)
      
                if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
      
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 100) {
                data.push({ value: 100, qty: 1}) 
                sisa = sisa - 100
      
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa / 200)
           
              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
      
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
              
              setSisaMoney(sisa)
            } else {  
              setSisaMoney(sisa)
            }
          } else if(sisa >= 500) {
            data.push({ value: 500, qty: 1 })
            sisa = sisa - 500
      
            if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa / 200)
    
              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
    
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1}) 
              sisa = sisa - 100
    
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 200) {
            data.push({ value: 200, qty: parseInt(sisa / 200) })
            sisa = sisa - 200 * parseInt(sisa / 200)
    
            if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
    
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100
            
            setSisaMoney(sisa)
          } else {  
            setSisaMoney(sisa)
          }
        } else if(sisa >= 1000) {
          data.push({ value: 1000, qty: 1 })
          sisa = sisa - 1000
     
          if(sisa >= 500) {
            data.push({ value: 500, qty: 1 })
            sisa = sisa - 500
            
            if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa/ 200)
           
              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
    
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1}) 
              sisa = sisa - 100
    
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 200) {
            data.push({ value: 200, qty: parseInt(sisa / 200) })
            sisa = sisa - 200 * parseInt(sisa / 200)
    
            if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
    
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100
          
            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 500) {
          data.push({ value: 500, qty: 1 })
          sisa = sisa - 500
    
          if(sisa >= 200) {
            data.push({ value: 200, qty: parseInt(sisa / 200) })
            sisa = sisa - 200 * parseInt(sisa / 200)
  
            if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
  
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 100) {
            data.push({ value: 100, qty: 1}) 
            sisa = sisa - 100
  
            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 200) {
          data.push({ value: 200, qty: parseInt(sisa / 200) })
          sisa = sisa - 200 * parseInt(sisa / 200)
  
          if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100
  
            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 100) {
          data.push({ value: 100, qty: 1 })
          sisa = sisa - 100
          
          setSisaMoney(sisa)
        } else {
          
          setSisaMoney(sisa)
        }
      } else if(sisa >= 10000) {
        data.push({ value: 10000, qty: 1 })
        sisa = sisa - 10000
       
        if(sisa >= 5000) {
          data.push({ value: 5000, qty: 1 })
          sisa = sisa - 5000
      
          if(sisa >= 2000) {
            data.push({ value: 2000, qty: parseInt(sisa / 2000) })
            sisa = sisa - 2000 * parseInt(sisa / 2000)
            
            if(sisa >= 1000) {
              data.push({ value: 1000, qty: 1 })
              sisa = sisa - 1000
          
              if(sisa >= 500) {
                data.push({ value: 500, qty: 1 })
                sisa = sisa - 500
              
                if(sisa >= 200) {
                  data.push({ value: 200, qty: parseInt(sisa / 200) })
                  sisa = sisa - 200 * parseInt(sisa / 200)
  
                  if(sisa >= 100) {
                    data.push({ value: 100, qty: 1 })
                    sisa = sisa - 100
  
                    setSisaMoney(sisa)
                  } else {
                    setSisaMoney(sisa)
                  }
                } else if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
  
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 200) {
                data.push({ value: 200, qty: parseInt(sisa / 200) })
                sisa = sisa - 200 * parseInt(sisa / 200)
  
                if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
  
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
  
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 500) {
              data.push({ value: 500, qty: 1 })
              sisa = sisa - 500
    
              if(sisa >= 200) {
                data.push({ value: 200, qty: parseInt(sisa / 200) })
                sisa = sisa - 200 * parseInt(sisa / 200)
    
                if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
    
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
    
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa / 200)
    
              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
    
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
              
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 1000) {
            data.push({ value: 1000, qty: 1 })
            sisa = sisa - 1000
        
            if(sisa >= 500) {
              data.push({ value: 500, qty: 1 })
              sisa = sisa - 500
            
              if(sisa >= 200) {
                data.push({ value: 200, qty: parseInt(sisa / 200) })
                sisa = sisa - 200 * parseInt(sisa / 200)

                if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100

                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100

                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa / 200)

              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100

                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100

              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 500) {
            data.push({ value: 500, qty: 1 })
            sisa = sisa - 500
  
            if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa / 200)
  
              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
  
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
  
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 200) {
            data.push({ value: 200, qty: parseInt(sisa / 200) })
            sisa = sisa - 200 * parseInt(sisa / 200)
  
            if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
  
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100
            
            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 2000) {
          data.push({ value: 2000, qty: parseInt(sisa / 2000) })
          sisa = sisa - 2000 * parseInt(sisa / 2000)
          
          if(sisa >= 1000) {
            data.push({ value: 1000, qty: 1 })
            sisa = sisa - 1000
           
            if(sisa >= 500) {
              data.push({ value: 500, qty: 1 })
              sisa = sisa - 500
             
              if(sisa >= 200) {
                data.push({ value: 200, qty: parseInt(sisa / 200) })
                sisa = sisa - 200 * parseInt(sisa / 200)

                if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100

                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100

                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa / 200)
           
              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100

                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }   
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100

              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 500) {
            data.push({ value: 500, qty: 1 })
            sisa = sisa - 500
           
            if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa / 200)

              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100 

                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100

              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 200) {
            data.push({ value: 200, qty: parseInt(sisa / 200) })
            sisa = sisa - 200 * parseInt(sisa / 200)
           
            if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100

              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100

            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 1000) {
          data.push({ value: 1000, qty: 1 })
          sisa = sisa - 1000

          if(sisa >= 500) {
            data.push({ value: 500, qty: 1 })
            sisa = sisa - 500
      
            if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa / 200)
           
              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100

                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100

              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 200) {
            data.push({ value: 200, qty: parseInt(sisa / 200) })
            sisa = sisa - 200 * parseInt(sisa / 200)

            if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100

              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100

            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 500) {
          data.push({ value: 500, qty: 1 })
          sisa = sisa - 500

          if(sisa >= 200) {
            data.push({ value: 200, qty: parseInt(sisa / 200) })
            sisa = sisa - 200 * parseInt(sisa / 200)

            if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100

              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100

            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 200) {
          data.push({ value: 200, qty: parseInt(sisa / 200) })
          sisa = sisa - 200 * parseInt(sisa / 200)

          if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100

            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 100) {
          data.push({ value: 100, qty: 1 })
          sisa = sisa - 100
          
          setSisaMoney(sisa)
        } else {
          setSisaMoney(sisa)
        }
      } else if(sisa >= 5000) {
        data.push({ value: 5000, qty: 1 })
        sisa = sisa - 5000
    
        if(sisa >= 2000) {  
          data.push({ value: 2000, qty: parseInt(sisa / 2000) })
          sisa = sisa - 2000 * parseInt(sisa / 2000)
          
          if(sisa >= 1000) {
            data.push({ value: 1000, qty: 1})
            sisa = sisa - 1000
            
            if(sisa >= 500) {
              data.push({ value: 500, qty: 1 })
              sisa = sisa - 500
           
              if(sisa >= 200) {
                data.push({ value: 200, qty: parseInt(sisa / 200) })
                sisa = sisa - 200 * parseInt(sisa / 200)
                
                if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
      
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 100) {
                data.push({ value: 100, qty: 1}) 
                sisa = sisa - 100
      
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            }  else if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa / 200)
      
              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
    
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
    
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 500) {
            data.push({ value: 500, qty: 1 })
            sisa = sisa - 500
  
            if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa / 200)
  
              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
  
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1}) 
              sisa = sisa - 100
              
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 200) {
            data.push({ value: 200, qty: parseInt(sisa / 200) })
            sisa = sisa - 200 * parseInt(sisa / 200)
           
            if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
  
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100
  
            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 1000) {
          data.push({ value: 1000, qty: 1 })
          sisa = sisa - 1000
        
          if(sisa >= 500) {
            data.push({ value: 500, qty: 1 })
            sisa = sisa - 500
      
            if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa / 200)

              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100

                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1}) 
              sisa = sisa - 100
              
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 200) {
            data.push({ value: 200, qty: parseInt(sisa / 200) })
            sisa = sisa - 200

            if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100

              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100

            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 500) {
          data.push({ value: 500, qty: 1 })
          sisa = sisa - 500

          if(sisa >= 200) {
            data.push({ value: 200, qty: parseInt(sisa / 200) })
            sisa = sisa - 200 * parseInt(sisa / 200)

            if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100

              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 100) {
            data.push({ value: 100, qty: 1}) 
            sisa = sisa - 100
            
            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 200) {
          data.push({ value: 200, qty: parseInt(sisa / 200) })
          sisa = sisa - 200 * parseInt(sisa / 200)
 
          if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100

            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 100) {
          data.push({ value: 100, qty: 1 })
          sisa = sisa - 100

          setSisaMoney(sisa)
        } else {
          setSisaMoney(sisa)
        }
      } else if(sisa >= 2000) {  
        data.push({ value: 2000, qty: parseInt(sisa / 2000) })
        sisa = sisa - 2000 * parseInt(sisa / 2000)
     
        if(sisa >= 1000) {
          data.push({ value: 1000, qty: 1})
          sisa = sisa - 1000
         
          if(sisa >= 500) {
            data.push({ value: 500, qty: 1 })
            sisa = sisa - 500
     
            if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa / 200)
    
              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
    
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1}) 
              sisa = sisa - 100
    
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 200) {
            data.push({ value: 200, qty: parseInt(sisa / 200) })
            sisa = sisa - 200 * parseInt(sisa / 200)
         
            if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
    
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100
            
            setSisaMoney(sisa)
          } else {  
            setSisaMoney(sisa)
          }
        } else if(sisa >= 500) {
          data.push({ value: 500, qty: 1 })
          sisa = sisa - 500
    
          if(sisa >= 200) {
            data.push({ value: 200, qty: parseInt(sisa / 200) })
            sisa = sisa - 200 * parseInt(sisa / 200)
  
            if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
  
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 100) {
            data.push({ value: 100, qty: 1}) 
            sisa = sisa - 100
  
            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 200) {
          data.push({ value: 200, qty: parseInt(sisa / 200) })
          sisa = sisa - 200 * parseInt(sisa / 200)
  
          if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100
  
            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 100) {
          data.push({ value: 100, qty: 1 })
          sisa = sisa - 100
          
          setSisaMoney(sisa)
        } else {  
          setSisaMoney(sisa)
        }
      } else if(sisa >= 1000) {
        data.push({ value: 1000, qty: 1 })
        sisa = sisa - 1000
   
        if(sisa >= 500) {
          data.push({ value: 500, qty: 1 })
          sisa = sisa - 500
          
          if(sisa >= 200) {
            data.push({ value: 200, qty: parseInt(sisa / 200) })
            sisa = sisa - 200 * parseInt(sisa/ 200)
         
            if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
  
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 100) {
            data.push({ value: 100, qty: 1}) 
            sisa = sisa - 100
  
            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 200) {
          data.push({ value: 200, qty: parseInt(sisa / 200) })
          sisa = sisa - 200 * parseInt(sisa / 200)
  
          if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100
  
            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 100) {
          data.push({ value: 100, qty: 1 })
          sisa = sisa - 100
        
          setSisaMoney(sisa)
        } else {
          setSisaMoney(sisa)
        }
      } else if(sisa >= 500) {
        data.push({ value: 500, qty: 1 })
        sisa = sisa - 500
  
        if(sisa >= 200) {
          data.push({ value: 200, qty: parseInt(sisa / 200) })
          sisa = sisa - 200 * parseInt(sisa / 200)

          if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100

            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 100) {
          data.push({ value: 100, qty: 1}) 
          sisa = sisa - 100

          setSisaMoney(sisa)
        } else {
          setSisaMoney(sisa)
        }
      } else if(sisa >= 200) {
        data.push({ value: 200, qty: parseInt(sisa / 200) })
        sisa = sisa - 200 * parseInt(sisa / 200)

        if(sisa >= 100) {
          data.push({ value: 100, qty: 1 })
          sisa = sisa - 100

          setSisaMoney(sisa)
        } else {
          setSisaMoney(sisa)
        }
      } else if(sisa >= 100) {
        data.push({ value: 100, qty: 1 })
        sisa = sisa - 100
        
        setSisaMoney(sisa)
      } else {
        
        setSisaMoney(sisa)
      }
      setListMoney(data)
    } else  if(money >= 50000) {
      const data = []
      var qty1 = parseInt(money / 100000)
      var sisa = money - 100000 * qty1

      data.push({ value: 50000, qty: 1})
      sisa = sisa - 50000
      
      if(sisa >= 20000) {
        data.push({ value: 20000, qty: parseInt(sisa / 20000) })
        sisa = sisa - 20000 * parseInt(sisa / 20000)
        
        if(sisa >= 10000) {
          data.push({ value: 10000, qty: 1 })
          sisa = sisa - 10000
         
          if(sisa >= 5000) {
            data.push({ value: 5000, qty: 1 })
            sisa = sisa - 5000
        
            if(sisa >= 2000) {
              data.push({ value: 2000, qty: parseInt(sisa / 2000) })
              sisa = sisa - 2000 * parseInt(sisa / 2000)
              
              if(sisa >= 1000) {
                data.push({ value: 1000, qty: 1 })
                sisa = sisa - 1000
            
                if(sisa >= 500) {
                  data.push({ value: 500, qty: 1 })
                  sisa = sisa - 500
                
                  if(sisa >= 200) {
                    data.push({ value: 200, qty: parseInt(sisa / 200) })
                    sisa = sisa - 200 * parseInt(sisa / 200)
    
                    if(sisa >= 100) {
                      data.push({ value: 100, qty: 1 })
                      sisa = sisa - 100
    
                      setSisaMoney(sisa)
                    } else {
                      setSisaMoney(sisa)
                    }
                  } else if(sisa >= 100) {
                    data.push({ value: 100, qty: 1 })
                    sisa = sisa - 100
    
                    setSisaMoney(sisa)
                  } else {
                    setSisaMoney(sisa)
                  }
                } else if(sisa >= 200) {
                  data.push({ value: 200, qty: parseInt(sisa / 200) })
                  sisa = sisa - 200 * parseInt(sisa / 200)
    
                  if(sisa >= 100) {
                    data.push({ value: 100, qty: 1 })
                    sisa = sisa - 100
    
                    setSisaMoney(sisa)
                  } else {
                    setSisaMoney(sisa)
                  }
                } else if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
    
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 500) {
                data.push({ value: 500, qty: 1 })
                sisa = sisa - 500
      
                if(sisa >= 200) {
                  data.push({ value: 200, qty: parseInt(sisa / 200) })
                  sisa = sisa - 200 * parseInt(sisa / 200)
      
                  if(sisa >= 100) {
                    data.push({ value: 100, qty: 1 })
                    sisa = sisa - 100
      
                    setSisaMoney(sisa)
                  } else {
                    setSisaMoney(sisa)
                  }
                } else if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
      
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 200) {
                data.push({ value: 200, qty: parseInt(sisa / 200) })
                sisa = sisa - 200 * parseInt(sisa / 200)
      
                if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
      
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
                
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 1000) {
              data.push({ value: 1000, qty: 1 })
              sisa = sisa - 1000
          
              if(sisa >= 500) {
                data.push({ value: 500, qty: 1 })
                sisa = sisa - 500
              
                if(sisa >= 200) {
                  data.push({ value: 200, qty: parseInt(sisa / 200) })
                  sisa = sisa - 200 * parseInt(sisa / 200)
  
                  if(sisa >= 100) {
                    data.push({ value: 100, qty: 1 })
                    sisa = sisa - 100
  
                    setSisaMoney(sisa)
                  } else {
                    setSisaMoney(sisa)
                  }
                } else if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
  
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 200) {
                data.push({ value: 200, qty: parseInt(sisa / 200) })
                sisa = sisa - 200 * parseInt(sisa / 200)
  
                if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
  
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
  
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 500) {
              data.push({ value: 500, qty: 1 })
              sisa = sisa - 500
    
              if(sisa >= 200) {
                data.push({ value: 200, qty: parseInt(sisa / 200) })
                sisa = sisa - 200 * parseInt(sisa / 200)
    
                if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
    
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
    
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa / 200)
    
              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
    
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
              
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 2000) {
            data.push({ value: 2000, qty: parseInt(sisa / 2000) })
            sisa = sisa - 2000 * parseInt(sisa / 2000)
            
            if(sisa >= 1000) {
              data.push({ value: 1000, qty: 1 })
              sisa = sisa - 1000
             
              if(sisa >= 500) {
                data.push({ value: 500, qty: 1 })
                sisa = sisa - 500
               
                if(sisa >= 200) {
                  data.push({ value: 200, qty: parseInt(sisa / 200) })
                  sisa = sisa - 200 * parseInt(sisa / 200)
  
                  if(sisa >= 100) {
                    data.push({ value: 100, qty: 1 })
                    sisa = sisa - 100
  
                    setSisaMoney(sisa)
                  } else {
                    setSisaMoney(sisa)
                  }
                } else if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
  
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 200) {
                data.push({ value: 200, qty: parseInt(sisa / 200) })
                sisa = sisa - 200 * parseInt(sisa / 200)
             
                if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
  
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }   
              } else if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
  
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 500) {
              data.push({ value: 500, qty: 1 })
              sisa = sisa - 500
             
              if(sisa >= 200) {
                data.push({ value: 200, qty: parseInt(sisa / 200) })
                sisa = sisa - 200 * parseInt(sisa / 200)
  
                if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100 
  
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
  
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa / 200)
             
              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
  
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
  
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 1000) {
            data.push({ value: 1000, qty: 1 })
            sisa = sisa - 1000
  
            if(sisa >= 500) {
              data.push({ value: 500, qty: 1 })
              sisa = sisa - 500
        
              if(sisa >= 200) {
                data.push({ value: 200, qty: parseInt(sisa / 200) })
                sisa = sisa - 200 * parseInt(sisa / 200)
             
                if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
  
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
  
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa / 200)
  
              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
  
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
  
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 500) {
            data.push({ value: 500, qty: 1 })
            sisa = sisa - 500
  
            if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa / 200)
  
              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
  
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
  
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 200) {
            data.push({ value: 200, qty: parseInt(sisa / 200) })
            sisa = sisa - 200 * parseInt(sisa / 200)
  
            if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
  
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100
            
            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 5000) {
          data.push({ value: 5000, qty: 1 })
          sisa = sisa - 5000
      
          if(sisa >= 2000) {  
            data.push({ value: 2000, qty: parseInt(sisa / 2000) })
            sisa = sisa - 2000 * parseInt(sisa / 2000)
            
            if(sisa >= 1000) {
              data.push({ value: 1000, qty: 1})
              sisa = sisa - 1000
              
              if(sisa >= 500) {
                data.push({ value: 500, qty: 1 })
                sisa = sisa - 500
             
                if(sisa >= 200) {
                  data.push({ value: 200, qty: parseInt(sisa / 200) })
                  sisa = sisa - 200 * parseInt(sisa / 200)
                  
                  if(sisa >= 100) {
                    data.push({ value: 100, qty: 1 })
                    sisa = sisa - 100
        
                    setSisaMoney(sisa)
                  } else {
                    setSisaMoney(sisa)
                  }
                } else if(sisa >= 100) {
                  data.push({ value: 100, qty: 1}) 
                  sisa = sisa - 100
        
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              }  else if(sisa >= 200) {
                data.push({ value: 200, qty: parseInt(sisa / 200) })
                sisa = sisa - 200 * parseInt(sisa / 200)
        
                if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
      
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
      
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 500) {
              data.push({ value: 500, qty: 1 })
              sisa = sisa - 500
    
              if(sisa >= 200) {
                data.push({ value: 200, qty: parseInt(sisa / 200) })
                sisa = sisa - 200 * parseInt(sisa / 200)
    
                if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
    
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 100) {
                data.push({ value: 100, qty: 1}) 
                sisa = sisa - 100
                
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa / 200)
             
              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
    
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
    
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 1000) {
            data.push({ value: 1000, qty: 1 })
            sisa = sisa - 1000
          
            if(sisa >= 500) {
              data.push({ value: 500, qty: 1 })
              sisa = sisa - 500
        
              if(sisa >= 200) {
                data.push({ value: 200, qty: parseInt(sisa / 200) })
                sisa = sisa - 200 * parseInt(sisa / 200)
  
                if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
  
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 100) {
                data.push({ value: 100, qty: 1}) 
                sisa = sisa - 100
                
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200
  
              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
  
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
  
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 500) {
            data.push({ value: 500, qty: 1 })
            sisa = sisa - 500
  
            if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa / 200)
  
              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
  
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1}) 
              sisa = sisa - 100
              
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 200) {
            data.push({ value: 200, qty: parseInt(sisa / 200) })
            sisa = sisa - 200 * parseInt(sisa / 200)
   
            if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
  
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100
  
            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 2000) {  
          data.push({ value: 2000, qty: parseInt(sisa / 2000) })
          sisa = sisa - 2000 * parseInt(sisa / 2000)
       
          if(sisa >= 1000) {
            data.push({ value: 1000, qty: 1})
            sisa = sisa - 1000
           
            if(sisa >= 500) {
              data.push({ value: 500, qty: 1 })
              sisa = sisa - 500
       
              if(sisa >= 200) {
                data.push({ value: 200, qty: parseInt(sisa / 200) })
                sisa = sisa - 200 * parseInt(sisa / 200)
      
                if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
      
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 100) {
                data.push({ value: 100, qty: 1}) 
                sisa = sisa - 100
      
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa / 200)
           
              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
      
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
              
              setSisaMoney(sisa)
            } else {  
              setSisaMoney(sisa)
            }
          } else if(sisa >= 500) {
            data.push({ value: 500, qty: 1 })
            sisa = sisa - 500
      
            if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa / 200)
    
              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
    
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1}) 
              sisa = sisa - 100
    
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 200) {
            data.push({ value: 200, qty: parseInt(sisa / 200) })
            sisa = sisa - 200 * parseInt(sisa / 200)
    
            if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
    
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100
            
            setSisaMoney(sisa)
          } else {  
            setSisaMoney(sisa)
          }
        } else if(sisa >= 1000) {
          data.push({ value: 1000, qty: 1 })
          sisa = sisa - 1000
     
          if(sisa >= 500) {
            data.push({ value: 500, qty: 1 })
            sisa = sisa - 500
            
            if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa/ 200)
           
              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
    
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1}) 
              sisa = sisa - 100
    
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 200) {
            data.push({ value: 200, qty: parseInt(sisa / 200) })
            sisa = sisa - 200 * parseInt(sisa / 200)
    
            if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
    
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100
          
            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 500) {
          data.push({ value: 500, qty: 1 })
          sisa = sisa - 500
    
          if(sisa >= 200) {
            data.push({ value: 200, qty: parseInt(sisa / 200) })
            sisa = sisa - 200 * parseInt(sisa / 200)
  
            if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
  
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 100) {
            data.push({ value: 100, qty: 1}) 
            sisa = sisa - 100
  
            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 200) {
          data.push({ value: 200, qty: parseInt(sisa / 200) })
          sisa = sisa - 200 * parseInt(sisa / 200)
  
          if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100
  
            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 100) {
          data.push({ value: 100, qty: 1 })
          sisa = sisa - 100
          
          setSisaMoney(sisa)
        } else {
          
          setSisaMoney(sisa)
        }
      } else if(sisa >= 10000) {
        data.push({ value: 10000, qty: 1 })
        sisa = sisa - 10000
       
        if(sisa >= 5000) {
          data.push({ value: 5000, qty: 1 })
          sisa = sisa - 5000
      
          if(sisa >= 2000) {
            data.push({ value: 2000, qty: parseInt(sisa / 2000) })
            sisa = sisa - 2000 * parseInt(sisa / 2000)
            
            if(sisa >= 1000) {
              data.push({ value: 1000, qty: 1 })
              sisa = sisa - 1000
          
              if(sisa >= 500) {
                data.push({ value: 500, qty: 1 })
                sisa = sisa - 500
              
                if(sisa >= 200) {
                  data.push({ value: 200, qty: parseInt(sisa / 200) })
                  sisa = sisa - 200 * parseInt(sisa / 200)
  
                  if(sisa >= 100) {
                    data.push({ value: 100, qty: 1 })
                    sisa = sisa - 100
  
                    setSisaMoney(sisa)
                  } else {
                    setSisaMoney(sisa)
                  }
                } else if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
  
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 200) {
                data.push({ value: 200, qty: parseInt(sisa / 200) })
                sisa = sisa - 200 * parseInt(sisa / 200)
  
                if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
  
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
  
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 500) {
              data.push({ value: 500, qty: 1 })
              sisa = sisa - 500
    
              if(sisa >= 200) {
                data.push({ value: 200, qty: parseInt(sisa / 200) })
                sisa = sisa - 200 * parseInt(sisa / 200)
    
                if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
    
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
    
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa / 200)
    
              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
    
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
              
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 1000) {
            data.push({ value: 1000, qty: 1 })
            sisa = sisa - 1000
        
            if(sisa >= 500) {
              data.push({ value: 500, qty: 1 })
              sisa = sisa - 500
            
              if(sisa >= 200) {
                data.push({ value: 200, qty: parseInt(sisa / 200) })
                sisa = sisa - 200 * parseInt(sisa / 200)

                if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100

                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100

                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa / 200)

              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100

                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100

              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 500) {
            data.push({ value: 500, qty: 1 })
            sisa = sisa - 500
  
            if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa / 200)
  
              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
  
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
  
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 200) {
            data.push({ value: 200, qty: parseInt(sisa / 200) })
            sisa = sisa - 200 * parseInt(sisa / 200)
  
            if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
  
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100
            
            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 2000) {
          data.push({ value: 2000, qty: parseInt(sisa / 2000) })
          sisa = sisa - 2000 * parseInt(sisa / 2000)
          
          if(sisa >= 1000) {
            data.push({ value: 1000, qty: 1 })
            sisa = sisa - 1000
           
            if(sisa >= 500) {
              data.push({ value: 500, qty: 1 })
              sisa = sisa - 500
             
              if(sisa >= 200) {
                data.push({ value: 200, qty: parseInt(sisa / 200) })
                sisa = sisa - 200 * parseInt(sisa / 200)

                if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100

                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100

                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa / 200)
           
              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100

                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }   
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100

              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 500) {
            data.push({ value: 500, qty: 1 })
            sisa = sisa - 500
           
            if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa / 200)

              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100 

                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100

              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 200) {
            data.push({ value: 200, qty: parseInt(sisa / 200) })
            sisa = sisa - 200 * parseInt(sisa / 200)
           
            if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100

              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100

            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 1000) {
          data.push({ value: 1000, qty: 1 })
          sisa = sisa - 1000

          if(sisa >= 500) {
            data.push({ value: 500, qty: 1 })
            sisa = sisa - 500
      
            if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa / 200)
           
              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100

                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100

              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 200) {
            data.push({ value: 200, qty: parseInt(sisa / 200) })
            sisa = sisa - 200 * parseInt(sisa / 200)

            if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100

              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100

            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 500) {
          data.push({ value: 500, qty: 1 })
          sisa = sisa - 500

          if(sisa >= 200) {
            data.push({ value: 200, qty: parseInt(sisa / 200) })
            sisa = sisa - 200 * parseInt(sisa / 200)

            if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100

              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100

            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 200) {
          data.push({ value: 200, qty: parseInt(sisa / 200) })
          sisa = sisa - 200 * parseInt(sisa / 200)

          if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100

            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 100) {
          data.push({ value: 100, qty: 1 })
          sisa = sisa - 100
          
          setSisaMoney(sisa)
        } else {
          setSisaMoney(sisa)
        }
      } else if(sisa >= 5000) {
        data.push({ value: 5000, qty: 1 })
        sisa = sisa - 5000
    
        if(sisa >= 2000) {  
          data.push({ value: 2000, qty: parseInt(sisa / 2000) })
          sisa = sisa - 2000 * parseInt(sisa / 2000)
          
          if(sisa >= 1000) {
            data.push({ value: 1000, qty: 1})
            sisa = sisa - 1000
            
            if(sisa >= 500) {
              data.push({ value: 500, qty: 1 })
              sisa = sisa - 500
           
              if(sisa >= 200) {
                data.push({ value: 200, qty: parseInt(sisa / 200) })
                sisa = sisa - 200 * parseInt(sisa / 200)
                
                if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
      
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 100) {
                data.push({ value: 100, qty: 1}) 
                sisa = sisa - 100
      
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            }  else if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa / 200)
      
              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
    
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
    
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 500) {
            data.push({ value: 500, qty: 1 })
            sisa = sisa - 500
  
            if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa / 200)
  
              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
  
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1}) 
              sisa = sisa - 100
              
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 200) {
            data.push({ value: 200, qty: parseInt(sisa / 200) })
            sisa = sisa - 200 * parseInt(sisa / 200)
           
            if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
  
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100
  
            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 1000) {
          data.push({ value: 1000, qty: 1 })
          sisa = sisa - 1000
        
          if(sisa >= 500) {
            data.push({ value: 500, qty: 1 })
            sisa = sisa - 500
      
            if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa / 200)

              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100

                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1}) 
              sisa = sisa - 100
              
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 200) {
            data.push({ value: 200, qty: parseInt(sisa / 200) })
            sisa = sisa - 200

            if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100

              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100

            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 500) {
          data.push({ value: 500, qty: 1 })
          sisa = sisa - 500

          if(sisa >= 200) {
            data.push({ value: 200, qty: parseInt(sisa / 200) })
            sisa = sisa - 200 * parseInt(sisa / 200)

            if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100

              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 100) {
            data.push({ value: 100, qty: 1}) 
            sisa = sisa - 100
            
            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 200) {
          data.push({ value: 200, qty: parseInt(sisa / 200) })
          sisa = sisa - 200 * parseInt(sisa / 200)
 
          if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100

            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 100) {
          data.push({ value: 100, qty: 1 })
          sisa = sisa - 100

          setSisaMoney(sisa)
        } else {
          setSisaMoney(sisa)
        }
      } else if(sisa >= 2000) {  
        data.push({ value: 2000, qty: parseInt(sisa / 2000) })
        sisa = sisa - 2000 * parseInt(sisa / 2000)
     
        if(sisa >= 1000) {
          data.push({ value: 1000, qty: 1})
          sisa = sisa - 1000
         
          if(sisa >= 500) {
            data.push({ value: 500, qty: 1 })
            sisa = sisa - 500
     
            if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa / 200)
    
              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
    
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1}) 
              sisa = sisa - 100
    
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 200) {
            data.push({ value: 200, qty: parseInt(sisa / 200) })
            sisa = sisa - 200 * parseInt(sisa / 200)
         
            if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
    
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100
            
            setSisaMoney(sisa)
          } else {  
            setSisaMoney(sisa)
          }
        } else if(sisa >= 500) {
          data.push({ value: 500, qty: 1 })
          sisa = sisa - 500
    
          if(sisa >= 200) {
            data.push({ value: 200, qty: parseInt(sisa / 200) })
            sisa = sisa - 200 * parseInt(sisa / 200)
  
            if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
  
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 100) {
            data.push({ value: 100, qty: 1}) 
            sisa = sisa - 100
  
            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 200) {
          data.push({ value: 200, qty: parseInt(sisa / 200) })
          sisa = sisa - 200 * parseInt(sisa / 200)
  
          if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100
  
            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 100) {
          data.push({ value: 100, qty: 1 })
          sisa = sisa - 100
          
          setSisaMoney(sisa)
        } else {  
          setSisaMoney(sisa)
        }
      } else if(sisa >= 1000) {
        data.push({ value: 1000, qty: 1 })
        sisa = sisa - 1000
   
        if(sisa >= 500) {
          data.push({ value: 500, qty: 1 })
          sisa = sisa - 500
          
          if(sisa >= 200) {
            data.push({ value: 200, qty: parseInt(sisa / 200) })
            sisa = sisa - 200 * parseInt(sisa/ 200)
         
            if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
  
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 100) {
            data.push({ value: 100, qty: 1}) 
            sisa = sisa - 100
  
            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 200) {
          data.push({ value: 200, qty: parseInt(sisa / 200) })
          sisa = sisa - 200 * parseInt(sisa / 200)
  
          if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100
  
            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 100) {
          data.push({ value: 100, qty: 1 })
          sisa = sisa - 100
        
          setSisaMoney(sisa)
        } else {
          setSisaMoney(sisa)
        }
      } else if(sisa >= 500) {
        data.push({ value: 500, qty: 1 })
        sisa = sisa - 500
  
        if(sisa >= 200) {
          data.push({ value: 200, qty: parseInt(sisa / 200) })
          sisa = sisa - 200 * parseInt(sisa / 200)

          if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100

            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 100) {
          data.push({ value: 100, qty: 1}) 
          sisa = sisa - 100

          setSisaMoney(sisa)
        } else {
          setSisaMoney(sisa)
        }
      } else if(sisa >= 200) {
        data.push({ value: 200, qty: parseInt(sisa / 200) })
        sisa = sisa - 200 * parseInt(sisa / 200)

        if(sisa >= 100) {
          data.push({ value: 100, qty: 1 })
          sisa = sisa - 100

          setSisaMoney(sisa)
        } else {
          setSisaMoney(sisa)
        }
      } else if(sisa >= 100) {
        data.push({ value: 100, qty: 1 })
        sisa = sisa - 100
        
        setSisaMoney(sisa)
      } else {
        
        setSisaMoney(sisa)
      }
      setListMoney(data)
    } else  if(money >= 20000) {
      const data = []
      var qty1 = parseInt(money / 100000)
      var sisa = money - 100000 * qty1

      data.push({ value: 20000, qty: parseInt(sisa / 20000) })
      sisa = sisa - 20000 * parseInt(sisa / 20000)
      
      if(sisa >= 10000) {
        data.push({ value: 10000, qty: 1 })
        sisa = sisa - 10000
       
        if(sisa >= 5000) {
          data.push({ value: 5000, qty: 1 })
          sisa = sisa - 5000
      
          if(sisa >= 2000) {
            data.push({ value: 2000, qty: parseInt(sisa / 2000) })
            sisa = sisa - 2000 * parseInt(sisa / 2000)
            
            if(sisa >= 1000) {
              data.push({ value: 1000, qty: 1 })
              sisa = sisa - 1000
          
              if(sisa >= 500) {
                data.push({ value: 500, qty: 1 })
                sisa = sisa - 500
              
                if(sisa >= 200) {
                  data.push({ value: 200, qty: parseInt(sisa / 200) })
                  sisa = sisa - 200 * parseInt(sisa / 200)
  
                  if(sisa >= 100) {
                    data.push({ value: 100, qty: 1 })
                    sisa = sisa - 100
  
                    setSisaMoney(sisa)
                  } else {
                    setSisaMoney(sisa)
                  }
                } else if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
  
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 200) {
                data.push({ value: 200, qty: parseInt(sisa / 200) })
                sisa = sisa - 200 * parseInt(sisa / 200)
  
                if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
  
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
  
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 500) {
              data.push({ value: 500, qty: 1 })
              sisa = sisa - 500
    
              if(sisa >= 200) {
                data.push({ value: 200, qty: parseInt(sisa / 200) })
                sisa = sisa - 200 * parseInt(sisa / 200)
    
                if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
    
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
    
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa / 200)
    
              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
    
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
              
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 1000) {
            data.push({ value: 1000, qty: 1 })
            sisa = sisa - 1000
        
            if(sisa >= 500) {
              data.push({ value: 500, qty: 1 })
              sisa = sisa - 500
            
              if(sisa >= 200) {
                data.push({ value: 200, qty: parseInt(sisa / 200) })
                sisa = sisa - 200 * parseInt(sisa / 200)

                if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100

                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100

                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa / 200)

              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100

                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100

              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 500) {
            data.push({ value: 500, qty: 1 })
            sisa = sisa - 500
  
            if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa / 200)
  
              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
  
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
  
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 200) {
            data.push({ value: 200, qty: parseInt(sisa / 200) })
            sisa = sisa - 200 * parseInt(sisa / 200)
  
            if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
  
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100
            
            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 2000) {
          data.push({ value: 2000, qty: parseInt(sisa / 2000) })
          sisa = sisa - 2000 * parseInt(sisa / 2000)
          
          if(sisa >= 1000) {
            data.push({ value: 1000, qty: 1 })
            sisa = sisa - 1000
           
            if(sisa >= 500) {
              data.push({ value: 500, qty: 1 })
              sisa = sisa - 500
             
              if(sisa >= 200) {
                data.push({ value: 200, qty: parseInt(sisa / 200) })
                sisa = sisa - 200 * parseInt(sisa / 200)

                if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100

                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100

                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa / 200)
           
              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100

                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }   
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100

              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 500) {
            data.push({ value: 500, qty: 1 })
            sisa = sisa - 500
           
            if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa / 200)

              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100 

                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100

              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 200) {
            data.push({ value: 200, qty: parseInt(sisa / 200) })
            sisa = sisa - 200 * parseInt(sisa / 200)
           
            if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100

              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100

            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 1000) {
          data.push({ value: 1000, qty: 1 })
          sisa = sisa - 1000

          if(sisa >= 500) {
            data.push({ value: 500, qty: 1 })
            sisa = sisa - 500
      
            if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa / 200)
           
              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100

                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100

              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 200) {
            data.push({ value: 200, qty: parseInt(sisa / 200) })
            sisa = sisa - 200 * parseInt(sisa / 200)

            if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100

              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100

            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 500) {
          data.push({ value: 500, qty: 1 })
          sisa = sisa - 500

          if(sisa >= 200) {
            data.push({ value: 200, qty: parseInt(sisa / 200) })
            sisa = sisa - 200 * parseInt(sisa / 200)

            if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100

              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100

            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 200) {
          data.push({ value: 200, qty: parseInt(sisa / 200) })
          sisa = sisa - 200 * parseInt(sisa / 200)

          if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100

            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 100) {
          data.push({ value: 100, qty: 1 })
          sisa = sisa - 100
          
          setSisaMoney(sisa)
        } else {
          setSisaMoney(sisa)
        }
      } else if(sisa >= 5000) {
        data.push({ value: 5000, qty: 1 })
        sisa = sisa - 5000
    
        if(sisa >= 2000) {  
          data.push({ value: 2000, qty: parseInt(sisa / 2000) })
          sisa = sisa - 2000 * parseInt(sisa / 2000)
          
          if(sisa >= 1000) {
            data.push({ value: 1000, qty: 1})
            sisa = sisa - 1000
            
            if(sisa >= 500) {
              data.push({ value: 500, qty: 1 })
              sisa = sisa - 500
           
              if(sisa >= 200) {
                data.push({ value: 200, qty: parseInt(sisa / 200) })
                sisa = sisa - 200 * parseInt(sisa / 200)
                
                if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100
      
                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 100) {
                data.push({ value: 100, qty: 1}) 
                sisa = sisa - 100
      
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            }  else if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa / 200)
      
              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
    
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
    
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 500) {
            data.push({ value: 500, qty: 1 })
            sisa = sisa - 500
  
            if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa / 200)
  
              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
  
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1}) 
              sisa = sisa - 100
              
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 200) {
            data.push({ value: 200, qty: parseInt(sisa / 200) })
            sisa = sisa - 200 * parseInt(sisa / 200)
           
            if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
  
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100
  
            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 1000) {
          data.push({ value: 1000, qty: 1 })
          sisa = sisa - 1000
        
          if(sisa >= 500) {
            data.push({ value: 500, qty: 1 })
            sisa = sisa - 500
      
            if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa / 200)

              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100

                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1}) 
              sisa = sisa - 100
              
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 200) {
            data.push({ value: 200, qty: parseInt(sisa / 200) })
            sisa = sisa - 200

            if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100

              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100

            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 500) {
          data.push({ value: 500, qty: 1 })
          sisa = sisa - 500

          if(sisa >= 200) {
            data.push({ value: 200, qty: parseInt(sisa / 200) })
            sisa = sisa - 200 * parseInt(sisa / 200)

            if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100

              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 100) {
            data.push({ value: 100, qty: 1}) 
            sisa = sisa - 100
            
            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 200) {
          data.push({ value: 200, qty: parseInt(sisa / 200) })
          sisa = sisa - 200 * parseInt(sisa / 200)
 
          if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100

            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 100) {
          data.push({ value: 100, qty: 1 })
          sisa = sisa - 100

          setSisaMoney(sisa)
        } else {
          setSisaMoney(sisa)
        }
      } else if(sisa >= 2000) {  
        data.push({ value: 2000, qty: parseInt(sisa / 2000) })
        sisa = sisa - 2000 * parseInt(sisa / 2000)
     
        if(sisa >= 1000) {
          data.push({ value: 1000, qty: 1})
          sisa = sisa - 1000
         
          if(sisa >= 500) {
            data.push({ value: 500, qty: 1 })
            sisa = sisa - 500
     
            if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa / 200)
    
              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
    
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1}) 
              sisa = sisa - 100
    
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 200) {
            data.push({ value: 200, qty: parseInt(sisa / 200) })
            sisa = sisa - 200 * parseInt(sisa / 200)
         
            if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
    
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100
            
            setSisaMoney(sisa)
          } else {  
            setSisaMoney(sisa)
          }
        } else if(sisa >= 500) {
          data.push({ value: 500, qty: 1 })
          sisa = sisa - 500
    
          if(sisa >= 200) {
            data.push({ value: 200, qty: parseInt(sisa / 200) })
            sisa = sisa - 200 * parseInt(sisa / 200)
  
            if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
  
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 100) {
            data.push({ value: 100, qty: 1}) 
            sisa = sisa - 100
  
            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 200) {
          data.push({ value: 200, qty: parseInt(sisa / 200) })
          sisa = sisa - 200 * parseInt(sisa / 200)
  
          if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100
  
            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 100) {
          data.push({ value: 100, qty: 1 })
          sisa = sisa - 100
          
          setSisaMoney(sisa)
        } else {  
          setSisaMoney(sisa)
        }
      } else if(sisa >= 1000) {
        data.push({ value: 1000, qty: 1 })
        sisa = sisa - 1000
   
        if(sisa >= 500) {
          data.push({ value: 500, qty: 1 })
          sisa = sisa - 500
          
          if(sisa >= 200) {
            data.push({ value: 200, qty: parseInt(sisa / 200) })
            sisa = sisa - 200 * parseInt(sisa/ 200)
         
            if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
  
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 100) {
            data.push({ value: 100, qty: 1}) 
            sisa = sisa - 100
  
            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 200) {
          data.push({ value: 200, qty: parseInt(sisa / 200) })
          sisa = sisa - 200 * parseInt(sisa / 200)
  
          if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100
  
            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 100) {
          data.push({ value: 100, qty: 1 })
          sisa = sisa - 100
        
          setSisaMoney(sisa)
        } else {
          setSisaMoney(sisa)
        }
      } else if(sisa >= 500) {
        data.push({ value: 500, qty: 1 })
        sisa = sisa - 500
  
        if(sisa >= 200) {
          data.push({ value: 200, qty: parseInt(sisa / 200) })
          sisa = sisa - 200 * parseInt(sisa / 200)

          if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100

            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 100) {
          data.push({ value: 100, qty: 1}) 
          sisa = sisa - 100

          setSisaMoney(sisa)
        } else {
          setSisaMoney(sisa)
        }
      } else if(sisa >= 200) {
        data.push({ value: 200, qty: parseInt(sisa / 200) })
        sisa = sisa - 200 * parseInt(sisa / 200)

        if(sisa >= 100) {
          data.push({ value: 100, qty: 1 })
          sisa = sisa - 100

          setSisaMoney(sisa)
        } else {
          setSisaMoney(sisa)
        }
      } else if(sisa >= 100) {
        data.push({ value: 100, qty: 1 })
        sisa = sisa - 100
        
        setSisaMoney(sisa)
      } else {
        
        setSisaMoney(sisa)
      }
      setListMoney(data)
    } else if(money >= 10000) {
      const data = []
      var qty1 = parseInt(money / 100000)
      var sisa = money - 100000 * qty1

      data.push({ value: 10000, qty: 1 })
      sisa = sisa - 10000
     
      if(sisa >= 5000) {
        data.push({ value: 5000, qty: 1 })
        sisa = sisa - 5000
    
        if(sisa >= 2000) {
          data.push({ value: 2000, qty: parseInt(sisa / 2000) })
          sisa = sisa - 2000 * parseInt(sisa / 2000)
          
          if(sisa >= 1000) {
            data.push({ value: 1000, qty: 1 })
            sisa = sisa - 1000
        
            if(sisa >= 500) {
              data.push({ value: 500, qty: 1 })
              sisa = sisa - 500
            
              if(sisa >= 200) {
                data.push({ value: 200, qty: parseInt(sisa / 200) })
                sisa = sisa - 200 * parseInt(sisa / 200)

                if(sisa >= 100) {
                  data.push({ value: 100, qty: 1 })
                  sisa = sisa - 100

                  setSisaMoney(sisa)
                } else {
                  setSisaMoney(sisa)
                }
              } else if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100

                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa / 200)

              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100

                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100

              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 500) {
            data.push({ value: 500, qty: 1 })
            sisa = sisa - 500
  
            if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa / 200)
  
              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100
  
                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
  
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 200) {
            data.push({ value: 200, qty: parseInt(sisa / 200) })
            sisa = sisa - 200 * parseInt(sisa / 200)
  
            if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100
  
              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100
            
            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 1000) {
          data.push({ value: 1000, qty: 1 })
          sisa = sisa - 1000
      
          if(sisa >= 500) {
            data.push({ value: 500, qty: 1 })
            sisa = sisa - 500
          
            if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa / 200)

              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100

                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100

              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 200) {
            data.push({ value: 200, qty: parseInt(sisa / 200) })
            sisa = sisa - 200 * parseInt(sisa / 200)

            if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100

              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100

            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 500) {
          data.push({ value: 500, qty: 1 })
          sisa = sisa - 500

          if(sisa >= 200) {
            data.push({ value: 200, qty: parseInt(sisa / 200) })
            sisa = sisa - 200 * parseInt(sisa / 200)

            if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100

              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100

            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 200) {
          data.push({ value: 200, qty: parseInt(sisa / 200) })
          sisa = sisa - 200 * parseInt(sisa / 200)

          if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100

            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 100) {
          data.push({ value: 100, qty: 1 })
          sisa = sisa - 100
          
          setSisaMoney(sisa)
        } else {
          setSisaMoney(sisa)
        }
      } else if(sisa >= 2000) {
        data.push({ value: 2000, qty: parseInt(sisa / 2000) })
        sisa = sisa - 2000 * parseInt(sisa / 2000)
        
        if(sisa >= 1000) {
          data.push({ value: 1000, qty: 1 })
          sisa = sisa - 1000
         
          if(sisa >= 500) {
            data.push({ value: 500, qty: 1 })
            sisa = sisa - 500
           
            if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa / 200)

              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100

                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100

              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 200) {
            data.push({ value: 200, qty: parseInt(sisa / 200) })
            sisa = sisa - 200 * parseInt(sisa / 200)
         
            if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100

              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }   
          } else if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100

            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 500) {
          data.push({ value: 500, qty: 1 })
          sisa = sisa - 500
         
          if(sisa >= 200) {
            data.push({ value: 200, qty: parseInt(sisa / 200) })
            sisa = sisa - 200 * parseInt(sisa / 200)

            if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100 

              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100

            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 200) {
          data.push({ value: 200, qty: parseInt(sisa / 200) })
          sisa = sisa - 200 * parseInt(sisa / 200)
         
          if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100

            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 100) {
          data.push({ value: 100, qty: 1 })
          sisa = sisa - 100

          setSisaMoney(sisa)
        } else {
          setSisaMoney(sisa)
        }
      } else if(sisa >= 1000) {
        data.push({ value: 1000, qty: 1 })
        sisa = sisa - 1000

        if(sisa >= 500) {
          data.push({ value: 500, qty: 1 })
          sisa = sisa - 500
    
          if(sisa >= 200) {
            data.push({ value: 200, qty: parseInt(sisa / 200) })
            sisa = sisa - 200 * parseInt(sisa / 200)
         
            if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100

              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100

            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 200) {
          data.push({ value: 200, qty: parseInt(sisa / 200) })
          sisa = sisa - 200 * parseInt(sisa / 200)

          if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100

            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 100) {
          data.push({ value: 100, qty: 1 })
          sisa = sisa - 100

          setSisaMoney(sisa)
        } else {
          setSisaMoney(sisa)
        }
      } else if(sisa >= 500) {
        data.push({ value: 500, qty: 1 })
        sisa = sisa - 500

        if(sisa >= 200) {
          data.push({ value: 200, qty: parseInt(sisa / 200) })
          sisa = sisa - 200 * parseInt(sisa / 200)

          if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100

            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 100) {
          data.push({ value: 100, qty: 1 })
          sisa = sisa - 100

          setSisaMoney(sisa)
        } else {
          setSisaMoney(sisa)
        }
      } else if(sisa >= 200) {
        data.push({ value: 200, qty: parseInt(sisa / 200) })
        sisa = sisa - 200 * parseInt(sisa / 200)

        if(sisa >= 100) {
          data.push({ value: 100, qty: 1 })
          sisa = sisa - 100

          setSisaMoney(sisa)
        } else {
          setSisaMoney(sisa)
        }
      } else if(sisa >= 100) {
        data.push({ value: 100, qty: 1 })
        sisa = sisa - 100
        
        setSisaMoney(sisa)
      } else {
        setSisaMoney(sisa)
      }
      setListMoney(data)
    } else  if(money >= 5000) {
      const data = []
      var qty1 = parseInt(money / 100000)
      var sisa = money - 100000 * qty1

      data.push({ value: 5000, qty: 1 })
      sisa = sisa - 5000
  
      if(sisa >= 2000) {
        data.push({ value: 2000, qty: parseInt(sisa / 2000) })
        sisa = sisa - 2000 * parseInt(sisa / 2000)
        
        if(sisa >= 1000) {
          data.push({ value: 1000, qty: 1 })
          sisa = sisa - 1000
      
          if(sisa >= 500) {
            data.push({ value: 500, qty: 1 })
            sisa = sisa - 500
          
            if(sisa >= 200) {
              data.push({ value: 200, qty: parseInt(sisa / 200) })
              sisa = sisa - 200 * parseInt(sisa / 200)

              if(sisa >= 100) {
                data.push({ value: 100, qty: 1 })
                sisa = sisa - 100

                setSisaMoney(sisa)
              } else {
                setSisaMoney(sisa)
              }
            } else if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100

              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 200) {
            data.push({ value: 200, qty: parseInt(sisa / 200) })
            sisa = sisa - 200 * parseInt(sisa / 200)

            if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100

              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100

            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 500) {
          data.push({ value: 500, qty: 1 })
          sisa = sisa - 500

          if(sisa >= 200) {
            data.push({ value: 200, qty: parseInt(sisa / 200) })
            sisa = sisa - 200 * parseInt(sisa / 200)

            if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100

              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100

            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 200) {
          data.push({ value: 200, qty: parseInt(sisa / 200) })
          sisa = sisa - 200 * parseInt(sisa / 200)

          if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100

            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 100) {
          data.push({ value: 100, qty: 1 })
          sisa = sisa - 100
          
          setSisaMoney(sisa)
        } else {
          setSisaMoney(sisa)
        }
      } else if(sisa >= 1000) {
        data.push({ value: 1000, qty: 1 })
        sisa = sisa - 1000
    
        if(sisa >= 500) {
          data.push({ value: 500, qty: 1 })
          sisa = sisa - 500
        
          if(sisa >= 200) {
            data.push({ value: 200, qty: parseInt(sisa / 200) })
            sisa = sisa - 200 * parseInt(sisa / 200)

            if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100

              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100

            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 200) {
          data.push({ value: 200, qty: parseInt(sisa / 200) })
          sisa = sisa - 200 * parseInt(sisa / 200)

          if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100

            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 100) {
          data.push({ value: 100, qty: 1 })
          sisa = sisa - 100

          setSisaMoney(sisa)
        } else {
          setSisaMoney(sisa)
        }
      } else if(sisa >= 500) {
        data.push({ value: 500, qty: 1 })
        sisa = sisa - 500

        if(sisa >= 200) {
          data.push({ value: 200, qty: parseInt(sisa / 200) })
          sisa = sisa - 200 * parseInt(sisa / 200)

          if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100

            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 100) {
          data.push({ value: 100, qty: 1 })
          sisa = sisa - 100

          setSisaMoney(sisa)
        } else {
          setSisaMoney(sisa)
        }
      } else if(sisa >= 200) {
        data.push({ value: 200, qty: parseInt(sisa / 200) })
        sisa = sisa - 200 * parseInt(sisa / 200)

        if(sisa >= 100) {
          data.push({ value: 100, qty: 1 })
          sisa = sisa - 100

          setSisaMoney(sisa)
        } else {
          setSisaMoney(sisa)
        }
      } else if(sisa >= 100) {
        data.push({ value: 100, qty: 1 })
        sisa = sisa - 100
        
        setSisaMoney(sisa)
      } else {
        setSisaMoney(sisa)
      }
      setListMoney(data)
    } else  if(money >= 2000) {
      const data = []
      var qty1 = parseInt(money / 100000)
      var sisa = money - 100000 * qty1

      data.push({ value: 2000, qty: parseInt(sisa / 2000) })
      sisa = sisa - 2000 * parseInt(sisa / 2000)
      
      if(sisa >= 1000) {
        data.push({ value: 1000, qty: 1 })
        sisa = sisa - 1000
    
        if(sisa >= 500) {
          data.push({ value: 500, qty: 1 })
          sisa = sisa - 500
        
          if(sisa >= 200) {
            data.push({ value: 200, qty: parseInt(sisa / 200) })
            sisa = sisa - 200 * parseInt(sisa / 200)

            if(sisa >= 100) {
              data.push({ value: 100, qty: 1 })
              sisa = sisa - 100

              setSisaMoney(sisa)
            } else {
              setSisaMoney(sisa)
            }
          } else if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100

            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 200) {
          data.push({ value: 200, qty: parseInt(sisa / 200) })
          sisa = sisa - 200 * parseInt(sisa / 200)

          if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100

            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 100) {
          data.push({ value: 100, qty: 1 })
          sisa = sisa - 100

          setSisaMoney(sisa)
        } else {
          setSisaMoney(sisa)
        }
      } else if(sisa >= 500) {
        data.push({ value: 500, qty: 1 })
        sisa = sisa - 500

        if(sisa >= 200) {
          data.push({ value: 200, qty: parseInt(sisa / 200) })
          sisa = sisa - 200 * parseInt(sisa / 200)

          if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100

            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 100) {
          data.push({ value: 100, qty: 1 })
          sisa = sisa - 100

          setSisaMoney(sisa)
        } else {
          setSisaMoney(sisa)
        }
      } else if(sisa >= 200) {
        data.push({ value: 200, qty: parseInt(sisa / 200) })
        sisa = sisa - 200 * parseInt(sisa / 200)

        if(sisa >= 100) {
          data.push({ value: 100, qty: 1 })
          sisa = sisa - 100

          setSisaMoney(sisa)
        } else {
          setSisaMoney(sisa)
        }
      } else if(sisa >= 100) {
        data.push({ value: 100, qty: 1 })
        sisa = sisa - 100
        
        setSisaMoney(sisa)
      } else {
        setSisaMoney(sisa)
      }
      setListMoney(data)
    } else  if(money >= 1000) {
      const data = []
      var qty1 = parseInt(money / 100000)
      var sisa = money - 100000 * qty1

      data.push({ value: 1000, qty: 1 })
      sisa = sisa - 1000
  
      if(sisa >= 500) {
        data.push({ value: 500, qty: 1 })
        sisa = sisa - 500
      
        if(sisa >= 200) {
          data.push({ value: 200, qty: parseInt(sisa / 200) })
          sisa = sisa - 200 * parseInt(sisa / 200)

          if(sisa >= 100) {
            data.push({ value: 100, qty: 1 })
            sisa = sisa - 100

            setSisaMoney(sisa)
          } else {
            setSisaMoney(sisa)
          }
        } else if(sisa >= 100) {
          data.push({ value: 100, qty: 1 })
          sisa = sisa - 100

          setSisaMoney(sisa)
        } else {
          setSisaMoney(sisa)
        }
      } else if(sisa >= 200) {
        data.push({ value: 200, qty: parseInt(sisa / 200) })
        sisa = sisa - 200 * parseInt(sisa / 200)

        if(sisa >= 100) {
          data.push({ value: 100, qty: 1 })
          sisa = sisa - 100

          setSisaMoney(sisa)
        } else {
          setSisaMoney(sisa)
        }
      } else if(sisa >= 100) {
        data.push({ value: 100, qty: 1 })
        sisa = sisa - 100

        setSisaMoney(sisa)
      } else {
        setSisaMoney(sisa)
      }
      setListMoney(data)
    } else if(money >= 500) {
      const data = []
      var qty1 = parseInt(money / 100000)
      var sisa = money - 100000 * qty1

      data.push({ value: 500, qty: 1 })
      sisa = sisa - 500
    
      if(sisa >= 200) {
        data.push({ value: 200, qty: parseInt(sisa / 200) })
        sisa = sisa - 200 * parseInt(sisa / 200)

        if(sisa >= 100) {
          data.push({ value: 100, qty: 1 })
          sisa = sisa - 100

          setSisaMoney(sisa)
        } else {
          setSisaMoney(sisa)
        }
      } else if(sisa >= 100) {
        data.push({ value: 100, qty: 1 })
        sisa = sisa - 100

        setSisaMoney(sisa)
      } else {
        setSisaMoney(sisa)
      }
      setListMoney(data)
    } else  if(sisa >= 200) {
      const data = []
      var qty1 = parseInt(money / 100000)
      var sisa = money - 100000 * qty1

      data.push({ value: 200, qty: parseInt(sisa / 200) })
      sisa = sisa - 200 * parseInt(sisa / 200)

      if(sisa >= 100) {
        data.push({ value: 100, qty: 1 })
        sisa = sisa - 100

        setSisaMoney(sisa)
      } else {
        setSisaMoney(sisa)
      }
      setListMoney(data)
    } else  if(sisa >= 100) {
      const data = []
      var qty1 = parseInt(money / 100000)
      var sisa = money - 100000 * qty1
      data.push({ value: 100, qty: 1 })
      sisa = sisa - 100

      setSisaMoney(sisa)
    } else {
      setListMoney([])
      setSisaMoney(money)
    }
  }
  
  return (
    <div>

      <div 
        style={{
          textAlign: "center",
          marginTop: "100px"
        }}
      >
        <h4>Palindrome</h4>
        <input 
          type="text" 
          onChange={(e) => isPalindrome(e.target.value)}
          style={{ 
            height: "25px",
            width: "200px",
            paddingLeft: "5px",
            outline: "none"
          }}
        />
        <span style={{ marginLeft: "10px" }}>Status: <span style={{ fontWeight: "bold", color: "bluek" }}>{status}</span></span>
      </div>

      <div 
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "100px"
        }}
      >
        <h4>Pecah Uang</h4>

        <div>
          <input 
          onChange={(e) => setMoney(Number(e.target.value))}
          type="number"
          style={{ 
            height: "25px",
            width: "200px",
            paddingLeft: "5px",
            outline: "none"
          }}  
          />
          <button
            onClick={pecahUang}
            style={{
              backgroundColor: "black",
              fontWeight: "bold",
              border: "none",
              outline: "none",
              borderRadius: "4px",
              color: "white",
              height: "30px",
              width: "60px",
              marginLeft: "10px"
            }}
            >
            Add
          </button>
          </div>
            
        <table style={{ 
          border: "none", 
          textAlign: "center", 
          marginTop: "50px", 
          borderCollapse: "collapse", 
          width: "60%", 
          marginBottom: "100px"
         }}
        > 

          <thead style={{ padding: "20px"}}>
            <tr style={{ border: "none",  backgroundColor: "#c4c4c4", height: "30px"}}>
              <th>Satuan</th>
              <th>Jumlah</th>
            </tr>
          </thead> 

           <tbody style={{ border: "1px solid #c4c4c4"}}>
      
             {listMoney && listMoney.map((val, idx) => {
               return (
                 <tr style={{ height: "40px" }}>
                  <td>Rp, {val.value} ,-</td>
                  <td>{val.qty}</td>
                 </tr>
               )
             })}
          </tbody>

          <tfoot style={{ backgroundColor: "#c4c4c4", height: "40px", fontWeight: "bold"}}>
            <tr>
              <td>Sisa</td>
              <td>{sisaMoney}</td>
            </tr>
          </tfoot>

        </table>
      </div>
    </div>
  )

}

export default App