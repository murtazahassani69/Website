import React, { useEffect, useState } from 'react';
import '../../../../css/CVBaldeTemplateCentral2.css';
import '../../../../css/CVBaldeTemplateCentral2Mq.css';

function Menu() {
    const [bloc1, setBloc1]=useState(true)
    const [bloc2, setBloc2]=useState(false)
    const [bloc3, setBloc3]=useState(false)
    const [bloc4, setBloc4]=useState(false)
    const [bloc5, setBloc5]=useState(false)
    const[bloc, setBloc]=useState(0)
    const [click, setClick]=useState(false)
    const  [myTime, setMyTime]=useState(()=>{
        setTimeout(()=>{
            setBloc(bloc+1)
        }, 10000)
    });
    const style= {backgroundColor: 'orange'}
    
    useEffect(()=>{
        
        if(click && myTime!==undefined){
            setMyTime(clearTimeout(myTime))
        }
        setMyTime(setTimeout(()=>{
            setBloc(bloc+1)
        }, 10000))

        setClick(false)
     
        switch(bloc){
            case 0: {
                setBloc1(true); setBloc2(false);  setBloc3(false); setBloc4(false); setBloc5(false)
            }; break;
            case 1: {
                setBloc1(false); setBloc2(true);  setBloc3(false); setBloc4(false); setBloc5(false)
            }; break;
            case 2: {
                setBloc1(false); setBloc2(false);  setBloc3(true); setBloc4(false); setBloc5(false)
            }; break;
            case 3: {
                setBloc1(false); setBloc2(false);  setBloc3(false); setBloc4(true); setBloc5(false)
            }; break;
            case 4: {
                setBloc1(false); setBloc2(false);  setBloc3(false); setBloc4(false); setBloc5(true)
            }; break;
            default: {setBloc(0); setClick(true)}
        }
        return ()=>{clearTimeout(myTime)}
    }, [bloc])

    function onClick(value){
        setClick(true);
        setBloc(value);
    }

    return (
        <div className='CVBaldeTemp2-header'>
            <div className='CVBaldeTemp2-head'>
                <div className='CVBaldeTemp2-menu'>
                    <input type="checkbox" id='CVBaldeTemp2-check'/>
                    <label htmlFor="CVBaldeTemp2-check" className='checkbtn2'>&#9776;</label>
                    <ul className='CVBaldeTemp2-menu-ul'>
                        <li onClick={()=>onClick(0)} style={{backgroundColor: bloc1 && 'orange'}}>HOME</li>
                        <li onClick={()=>onClick(1)} style={{backgroundColor: bloc2 && 'orange'}}>ABOUT</li>
                        <li onClick={()=>onClick(2)} style={{backgroundColor: bloc3 && 'orange'}}>SKILLS</li>
                        <li onClick={()=>onClick(3)} style={{backgroundColor: bloc4 && 'orange'}}>PORTFOLIO</li>
                        <li onClick={()=>onClick(4)} style={{backgroundColor: bloc5 && 'orange'}}>CONTACT</li>
                    </ul>
                </div>
            </div>
            { bloc1 && <Content1 /> }
            { bloc2 && <Content2 /> }
            { bloc3 && <Content3 /> }
            { bloc4 && <Content4 /> }
            { bloc5 && <Content5 /> }
        </div>
    );
}

function Content1() {
    return (
        <div className='CVBaldeTemp2-content'>
            <div className='CVBaldeTemp2-content-profile'>
                <div className='CVBaldeTemp2-content-whiteCircle'>
                    <img src='https://image.shutterstock.com/image-vector/blank-avatar-photo-place-holder-260nw-1095249842.jpg' alt='Picture' />
                </div>
                <div className='CVBaldeTemp2-content-hello'>
                    <span>HELLO</span>
                </div>
            </div>
            <div className='CVBaldeTemp2-content-name'>
                <span>MY NAME IS</span>
            </div>
            <div className='CVBaldeTemp2-content-name1'>
                <span>BOUBACAR BALDE</span>
            </div>
        </div>
    );
  }

  function Content2() {
    return (
        <div className='CVBaldeTemp2-content22'>
            <h1>About Me</h1>
            <div className='CVBaldeTemp2-content2'>
                <div className='CVBaldeTemp2-content2-left'>
                    <span>I AM A</span>
                    <span>FULL-STACK</span>
                    <span>WEB DEVELOPER</span>
                </div>
                <div className='CVBaldeTemp2-content2-right'>
                    <span>WITH</span>   
                    <span>1 YEAR</span>
                    <span>EXPERIENCE</span>
                </div>
            </div>
        </div>
    );
  }

  function Content3() {
    return (
        <div className='CVBaldeTemp2-content3'>
            <div className='CVBaldeTemp2-content3-title'><h2>TECHNICAL SKILLS</h2></div>
            <div className='CVBaldeTemp2-content3-per'>
                <span className='options'>HTML/CSS </span><span className='per'><span className='CVBaldeTemp2-content3-per1'></span></span><span className='CVBaldeTemp2-content3-per-number'> 90%</span>
            </div>
            <div className='CVBaldeTemp2-content3-per'>
                <span className='options'>JAVASCRIPT </span><span className='per'><span className='CVBaldeTemp2-content3-per2'></span></span><span className='CVBaldeTemp2-content3-per-number'> 80%</span>
            </div>
            <div className='CVBaldeTemp2-content3-per'>
                <span className='options'>REACT </span><span className='per'><span className='CVBaldeTemp2-content3-per3'></span></span><span className='CVBaldeTemp2-content3-per-number'> 70%</span>
            </div>
            <div className='CVBaldeTemp2-content3-per'>
                <span className='options'>NODEJS </span><span className='per'><span className='CVBaldeTemp2-content3-per4'></span></span><span className='CVBaldeTemp2-content3-per-number'> 50%</span>
            </div>
            <div className='CVBaldeTemp2-content3-per'>
                <span className='options'>MONGODB </span><span className='per'><span className='CVBaldeTemp2-content3-per5'></span></span><span className='CVBaldeTemp2-content3-per-number'> 30%</span>
            </div>
        </div>
    );
  }

  function Content4(){
      return(
        <div className='CVBaldeTemp2-content44'>
            <h1>Projects i contributed to</h1>
            <div className='CVBaldeTemp2-content4'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDvu6vSM4Wtz3rNJ8u6aJBUDdlxx2LjBNG1g&usqp=CAU' alt='SHA'/>
                <img src='data:image/jpeg;base64,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' 
                    alt='Amnick'/>
                <img src='https://www.tafthighschool.org/ourpages/auto/2015/4/17/46587841/myp%20personal%20project%20logo.jpg' alt='Personal'/>
            </div>
        </div>
      )
  }

  function Content5(){
      return(
            <div className='CVBaldeTemp2-content5'>
                <div className='CVBaldeTemp2-content5-title'>
                    <h3>GET IN TOUCH</h3>
                </div>
                
                <div className='CVBaldeTemp2-content5-bloc1'>
                    <div className='CVBaldeTemp2-content5-bloc'>
                        <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEX///8AAAD6+vqYmJienp6bm5vr6+vw8PAeHh4ZGRkhISEICAgTExP09PSHh4fn5+fR0dFYWFjf3981NTWPj49BQUG4uLjNzc2+vr6np6dTU1NlZWWxsbEtLS3Hx8d8fHxJSUlycnJ2dnZoaGiAgIBEREQoKCjY2NhUVFSm/PrnAAAE6ElEQVR4nO2c6XabMBBGA3i38YbXeKmTLu77P2Gj00bCaRASIqPPPt/9jeW5B9BIjKSnJ0IIIYSQLyWdH7s/FsUwMUxGp/Xz4XWadTr74/k6S2PH2Jx55zBOnBhdXrLOLna8fqTH725yZc6xo3Zns/DXU1xjB+5Gvmqm98Yhduwu9L819kuSUz92+LWk0wC/JBn2YgvUsQnyS5IBuGH/ECiIbnj+POjf0+Nue5318zzv93qz5fI63553m80++3a4FKPJ/Rh+0oMW2bk+5Hw530zuwfC/J/RydA63P8Q3TJ9v9cbZ0uPXPXzDdH3jN9n7jabvwPByI7jynS3gG96MQi8z79/DG/4oC3YaNIBueDOQmTdpAdxwWfI7NYsQ3PCnEVznzZrANsyMYNFQENtwZgTHjSd30IalwZrPKOYWZMO5ETw2bwXZ0AxHvwe0Amy4NbewaS+jADY0b2HAM4psaJL9OqgdXEMzrQ/7Wo1rOGrnFuIamk9PgUUVWMNXPZoJbAjWUD+kq8CGUA3NeKb5eO0vqIadd8FTaEuoXxP1iM35Ic37n7PENEx1bX7rcnm+nR7Wo8nnJJCG5jV0+Hg4m/5KHMAy3L2Hdam91LkqjGWoa6G1r+H85CgIZqg7mrppxdHVD81Q35iaBRR7d8FkjbR6KNddqT2qnc3oI5lQ8E6YuaH1sp6P4ALpFppkUVgvu60rjgejatYZlKCZOi1sV5Wf0WJ1nfUsYPmVYn+1XVWU3jE0gzp0xWlquaj0Le7OVh4+lZKALeHrOXLYt7g46LmTrYfXgnexJO8DXQdDU7ZpVDiNTOZgqHujX3JxtYeLoX5XX+Tiag8XQ6d3FRYvw65cXO1BQwUNsaGhgobY0FBBQ2xoqKAhNjRU0BCbBzGsqLu/YYqeLoarqgp+GTmtd9JVMajE7KpzMZyMqlvSFN57bQL5uFmrChdDR55lFV1r7y0aBi+u8uLDdjQZQ9EacG8QwXAkWcd3NrTUXDzWKPyl8Z6UJjgbWoJKfQ2t1da2cTW01gW9likkwl//3QwPNUWlud8WfVu1tXW04XCWVlPfjuXHupGXd8P913sZjOHX9296l61omVHQMNfrGUIXG3shaKhXFU38N0mH/K2coS6Gi6ZDSUO9JkU0HUoa6mJ4yA4/fwQN9Vpc0XQoaRgnHUoaxkmHgoaR0qGgYaR0KGgYKR0KGkZKh4KGkdKhoGGkdChoGCkdChpGSodyhrHSoZxhrHQoZxgrHcoZxkqHcoax0qGcYax0KGcYKx3KGcZKh8Zw8LVdXBorHTrWLX7XbJG9OpbKE/l0KF97kk6H7vVDS3XGq34onQ7la8DS6VC+ji+dDuXXYmzk3P4hvJ5mIn+cQnqpD6tFQ/lb+EY2rA+sJcPnaJtMq2vvnvsPayr5iDzI+lILNFTQEBsaKmiIDQ0VNMSGhgoaYkNDBQ2xoaGChtjQUEFDbGiooCE2NFTQEBsaKmiIDQ0VNMSGhgoaYkNDBQ2xoaGChtjQUEFDbGiooCE2NFTQEBsaKmiIDQ0VNMSGhgoaYkNDBQ2xoaGChtjQUEFDbGiooCE2NFTQEBsaKmiITcmw8tSZ7mMYJuNqHsTQARpC8viG3XovQyd2tE3Y+BhGOYwtlL6PofTBne3gcTap9YxTYK6LejfFouacWkIIIYQQF/4AWv9G8CzPlnoAAAAASUVORK5CYII=' alt='fb'
                             /><span>Facebook</span>
                    </div>
                    <div className='CVBaldeTemp2-content5-bloc'>
                        <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///8AAADt7e3u7u7r6+t1dXXo6Oj29vbZ2dltbW3y8vL4+PggICBpaWnT09P6+vqrq6vFxcW0tLTh4eGIiIgtLS2urq58fHySkpIeHh6ioqJxcXFOTk64uLjOzs6NjY2YmJgzMzNcXFwUFBQ+Pj4VFRWdnZ1HR0dAQEALCws8eaP7AAAMdElEQVR4nO1dbXuiPBOlpBoalDdfsGqttrvd2///Bx8RbWFmEgKRBH06X/bsVQI5GDInk0nieYX5jDH/QZE3kHr8Mvxl2MjwZM8Pis6wJPv8oIg5b0b9IvbL8O4Rq3ySzw+JLh3qMCrTDyqtfQNg4mRnxAvrGRUPs+7xd9l6Nc9Ho9FLYaNRjyifr9ZZZI2h4N4s2fx9sm9/N8nM46JfTSO4yF4ckPuxTXaqQ6s6t9E0IgxGTumVlgdc9KFpGOfriWtyF5skgjPNpqrv8cXeNa+a7cWtGWauKSHLdBlqaZpg4ZoPYYvgZpqGbVyTkdiGadTea26ggWsiCguam2ozw5VrFkpbmTPcuubQYFszTSP8o2sGjXZ8FgaaZsif4I8FktpraJqd67pr2k7xoSk9fuq65tqWdmOo/AVfp1/LNI2CIBif7DkIekRRmi6/pq+q6uw6aBoh/wY/52/j83W2olilYx+/zT+ldQqEhIdc0/iye81nkhI20Gwuq5YvK+vJXh7tJibLS+TEVYCQ84Qewx1lJWQMSUd/XIbCeQhUhEuS4rYdQ1KqvXsnfs4ZMia8d6p6qzaahuplJjP92EjvaEY11UBf0zCi+IcQg5hJKpEQH0QdGVmC6vGJ8eAqdtgsKRQTH9KGuI70+EQbTQbCq4oSqp3qMcQhi8Q1GxJhiguKIdY0OOi08py5eCXCDTVD1xGaRqBiH/FQKAEU4+5GNGsajuKiEzGUZomQQE5jzxs9Pv4JZwNmOEO1bWQo1rDI+0DY0AipmzUMhl8YfrfaEP3uzvWLGqFvioPrgKbBo8KlcK1fVMgXSIYHTKlpeA5fSTiIxihHMWx0OVd6fNTPLK9q1CEbwb0gjcKQU38VyO8LFUOBvD15V6tIiPV/56q8rsbUrCGHVc5EnWFN03A4hT3nrh17bbw7F/g6DgMbm1qdoaaB78NlTKZAgtVly6KIOMHYDax0/S5e7WeHF3/iRmEViTFyXjuOroMRuFntr3WG8KudO2b4TIQPdyh3CDbTRMEQDn3f3DIM/2CCp58Idjdv4IINxfDSamEi0Lj2V9sI9SGl/ReC68bggr+1v1Y1DYNR4FenqoVR4aJzyxKgBAz4SzWNgDMVU6eqhcvSk/6GoMQUXBBVPtWax0f+/sspw2cJweJHrJf4An/PpAzhyClzqtXo0HZhOVBa8Mp1jWFF0wgY90idOnvpJMzTAigtONG5EjJNA++Z6uSrtEe+3nXw66pYvQSDDOdSTQOHTpFu8pgOEjwMy37+9C/XuHMDw58SLAJ/zqUeH3ZegW4CoBqx83vej7ZXCTbZjvbn9sFUZRWtFDCEw/aRVYanny5Y0j/HdBnEXJ6/LU8WzDswLFutjKGBLomjd9UE/Ot7BBXKNwqlpdJ6CZIhqWnQ6HBspksYF2tSWdbsz1pchwv1u3Dph8jB06Bse+ESTUMwNGmgfCz/kuo2H1NT5wJW/GpLGMCVMUQe/7YMY9gzqyyPqbvQb+iArnPDEEWWG2xN3YVM3PVbMqy4X8TwuaNj972o/YKM1whLARRlOlmEnwsV7AuXaRrUl/qtyZVI4awVNkX3I+Yl3jjWSERfKtE0N/KH3TMaA3g/Mf5Xv2JHhDete3w4lmljX1gPVWNHuUfNg9llyDwqSULfPrCSi9cXzTB/pp9rVdOI8cGI4MkXjAW+8+wtySLpc61qGmm+Xwtjkmf40uda1DQyFdLOxm0/fXsev5ngZHFYNK8PM31uXwyFqoku8izi58FvMQzmUZarFhqxdqkDljQNk/+C02wcwlkjEY4lw8bzu2VtRIYtTXOgK3tI5NEelsgKtXiuNU1D+8F/aSzkd2EiTv+R5abaz7Xm8UklM9nFTSuTRbwjgwDroTEktehes5bk8tTgtgwNNY2PJo9PdpxplS3QjMibP2prKSuahugVt0x/xbVgROb8i15ZO5oGhmSfimlKJKEViFF5yZFeWSseH4/oc726VRAO67wOhyGOyWw061ZFeLMGMnbTmuENNE2MqrZtKEEj/C3Gw9A0KBfu6ZO1El0XxPCC1ZzrlO1b0xB6tGPOLRF3GmvVoGePj2cy960/wStCqelznXVkvTOEtZq072S+ERJwOjOYfWsa1JHudJUMgdC61bVG2Z41Dcpb+hcbZNHEcKTxJ3StaQSSM6nJEkWBVldHGtsm9erxOUyWP8QdP8ESxQdwv3eNHN5eGcawb0hab1VVbxMwPXKi8cb61DToI39ibZUMQCiZLWBuNQ1MR8LzR6bzVsvGEv1qGlifrLFEE6LemUuPD0pcM1INGCIR6JYh/GoWoTHDEIaKhVNNA91X3m4/PAoJOFRJXWoatIlb1knJ1BHMhdo3rrzqUdOgNN7IqIGWCOXhoSWFFj1+CIfl/AYM4WBl65QhnCkz62QuCNxzEjrUNCi5zszZXxC8aehS06DXbUju/KJxw3CoaUCBRWOD0kDIITr1+KDA4SYMD4/OMO7lN+yqaUCB63doomnIDtqVpvElfamZpsF9qUNNcxf+8A40jUuGd6FLjTSNZGxh5vbx2MKlppGMD01oUuNDh5rmfsb4XRk+fpyGjP2ZMewp1tZV00jipSaahnpnzjSNLOZtommomLdDTWNj3iJsLvs792TE8A7mD400jU/PAXfXNPQcsEtN49Hz+J01jWQe3+Xc093kYhgwxDuQ7DszHGY+zZ3kRHXWNEUXjPLajowpS9BIkdfmUNOckSI3sZWmkeYmOtU0ZzTs/NJbMMRd4KPlCFN53i8t87yJ49xulOdtqmnoIc/Jtj7ePE6GhK/M1Xesacrb4AqW6y30XlHTegu3mqZE5JoZyU73CJG7+N94zYwxQ3rd06vGuqfwTtY9qdauKcraW7tmommu6EBW9Xv9IalGlOsPdfWQrbXcqjWky+oa0rKEcg3psVhDqq+HbK3lFrJdAAsr1gGL73XAwuY64NsxfPy13P5A1+PfRtNcETM/ie7ItJ9mUdP8yK9b7ouh+1y7+9OY7m0y7XAQmPX9adruEFW1FkrGIUMv6PoxHtEeQ8PSNBXU7ezul45Pc7LnXqQ8y4+0y15fXZ7mZs+9m+zXponud8+9gTM03jdxmJqmjvT3vuz+DNuaBqEwelcp7cl1/1KTZ9jfc6+G1HvQhoo9aK14/NvslFy8J5Hu88o+wvk+Le7dXqEZMkR7Qd9mp+QStd4LWp+hzl7QZauV7OfdXmXYRdR+3rSmkezJ3kVl2EV4T3aJpkH76i9v1Iz6RjBfc30nZyPoI/2zEYZ1voU+Up9vUdE0Pn1GiZnesIHwGSUyTSM5Z2YoRGSIOmdGommGdlaQJtI6K+jy/6Gd96SH2pz3NLQzu/SQ1pld11b7RFw8ANWiROS5a7Smoc7O0983zxUiz86TaJphnn/YhBrPP6wxxGdYJib5sDZQyzMsiXNIY+cc1Kj5HNKapiHPkh2KYyeR5CxZqaahzwMeABE5gtWdwLiPB3523Kzv7EznRHKm80+5hz+X+87OVkfTI3sUu7swrCgF/CN+xIPRL3UU49lYga4j5nvwWVkrr9ovDQfhfLiMuI7hBoAzXZKhNMsaQp3iJZVK6fHPiMgzTFyzIRAmeD6nRochtS/zqjHJ0DKKiZTNDXEd1DSXECsu/PQhhC0nroGEoFI+qCMKkKYpEZUPO5kNg9wZzahZ9IAs4dFNgczafSfPInLgBbGSOX9IdAkJQ2J1R2HL0P1gSoT0IbNbSQkZQ4/OiZkk3GxC2hRxntAzrp+yEheGWDNIzxueu4zdzKSpAb6srDSHBY8Uf17X/K0MFbNzb3x9ZX2j8ducOEz+YgE8q/sHUf6wRGg9Z9Vep1/LNI2CIBgXFgQ9oihNl19TZQ7STtq4aY9/QWjV8WAtlX++SobqX3FAtiNrr9I036j7SYY2LZDUXqVpvrsbvKxzcPZZrCBTqCBP0kC/Ee36h2PbJg/ayJAWcIOxfUPtdRgO+mMkBoTamqaCBDFeHIRtdPJ99PJyA9USHle2CPTiOSp/WEHyo9xdWdbcQJs9fhWhrdnc2pduYpw+Q186brFvk0Q07sP3w1CpaepI8KBN7nZflgfFOFw35NGgaVCIiovMbce6yQSXn4nZSdNAJLg3Szbtj043t7+bZOZx0TaO0prhFUXZejXPR6PRS2GjUY8on6/WWdQ17tGZoTjZGfHCekbFwwwZuom6WEGd1xrdD9L2h3eKWnj8O0X/DwxbaJq7RC01zT2i0obRoPpBvwzvH5X206E+HvofG29UAdhtFsQAAAAASUVORK5CYII='
                             alt='Instgram' /><span>Instagram</span>
                    </div>
                    <div className='CVBaldeTemp2-content5-bloc'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyp5SdwDSVMVwsS-6RIsqbnQXBltG9ikch1Q&usqp=CAU'
                             alt='email' /><span>Email</span>
                    </div>
                    <div className='CVBaldeTemp2-content5-bloc'>
                        <img src='data:image/png;base64,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' alt='home' /><span>City</span>
                    </div>
                </div>
                
            </div>
      )
  }

function Central() {
  return (
        <div className='.CVBaldeTemp2-main'>
            <Menu />
        </div>
  );
}

export default Central;
