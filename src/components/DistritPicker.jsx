import React from 'react';
import {
    NativeSelect,
    FormControl
} from '@material-ui/core'

const DistrictPicker = ({
        data,
        rawdata,
        district,
        getDistrict,
        getState
    }) => {

        if (!data) {
            return ("")

        }


        const Listoption = Object.keys(data);
        const stateListoption = Object.keys(rawdata)


        return ( 
            <div style={{
                display:"flex",
                flexWrap:"wrap",
                flexDirection:"column",
                justifyContent:"center",
                alignItems:"center"
            }}>
<FormControl>
<NativeSelect style = {
                {
                    backgroundColor: "#262529",
                    color: "white",
                    width: "300px",
                    height: "50px",
                    borderRadius: "10px",
                    textAlign: "center",
                    lineHeight: "1.5",
                    padding: "5%",
                    marginBottom:"50px"
                }
            }
            defaultValue = 'Maharashtra'
            variant = 'filled'
            onChange = {
                (e) => getState(e.target.value)
            } > {
                stateListoption.map((state, i) => < option style = {
                        {
                            backgroundColor: "#262529",
                            color: "white",
                            width: "50px",
                            height: "50px",
                            borderRadius: "10px",
                            textAlign: "center",
                            lineHeight: "1",
                            padding: "4%"
                        }
                    }
                    key = {
                        i
                    }
                    value = {
                        state
                    } > {
                        state
                    } 
                    
                    </option>)

                }

            </NativeSelect> 
            </FormControl>
        <FormControl >
            <NativeSelect style = {
                {
                    backgroundColor: "#262529",
                    color: "white",
                    width: "300px",
                    height: "50px",
                    borderRadius: "10px",
                    textAlign: "center",
                    lineHeight: "1.5",
                    padding: "5%",
                    marginBottom:"50px"
                }
            }
            defaultValue = ''
            variant = 'filled'
            onChange = {
                (e) => getDistrict(e.target.value)
            } > {
                Listoption.map((city, i) => < option style = {
                        {
                            backgroundColor: "#262529",
                            color: "white",
                            width: "50px",
                            height: "50px",
                            borderRadius: "10px",
                            textAlign: "center",
                            lineHeight: "1",
                            padding: "4%"
                        }
                    }
                    key = {
                        i
                    }
                    value = {
                        city
                    } > {
                        city
                    } 
                    
                    </option>)

                }

            </NativeSelect> 
        </FormControl>
        </div>
            )
        }

        export default DistrictPicker;