"use client";

import React, { useState } from "react";

const ProfileTImeZone = () => {
  const [formData, setFormData] = useState({
    timezone: "",
  });
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData((prev: any) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div
      className="content-body tab-pane fade"
      id="nav-timezone"
      role="tabpanel"
      aria-labelledby="nav-timezone-tab"
    >
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Timezone</h4>
              <a className="heading-elements-toggle">
                <i className="la la-ellipsis-v font-medium-3"></i>
              </a>
              <div className="heading-elements">
                <ul className="list-inline mb-0">
                  <li>
                    <a data-action="collapse">
                      <i className="ft-minus"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card-content collapse show">
              <div className="card-body profile-content" id="TimezoneContent">
                <form asp-action="Timezone" id="form-user-timezone">
                  <div className="row text-center ml-1">
                    <select
                      className="js-Selector select2-hidden-accessible"
                      tabIndex={-1}
                      aria-hidden="true"
                      onChange={handleSelectChange}
                      value={formData?.timezone}
                      name={"timezone"}
                    >
                      <option value="Etc/GMT+12" data-timezone="-12:00">
                        (GMT-12:00) International Date Line West
                      </option>
                      <option value="Pacific/Midway" data-timezone="-11:00">
                        (GMT-11:00) Midway Island, Samoa
                      </option>
                      <option value="Pacific/Honolulu" data-timezone="-10:00">
                        (GMT-10:00) Hawaii
                      </option>
                      <option value="America/Juneau" data-timezone="-09:00">
                        (GMT-09:00) Alaska
                      </option>
                      <option value="America/Boise" data-timezone="-07:00">
                        (GMT-07:00) Mountain Time (US and Canada)
                      </option>
                      <option value="America/Dawson" data-timezone="-07:00">
                        (GMT-07:00) Pacific Time (US and Canada); Tijuana
                      </option>
                      <option value="America/Phoenix" data-timezone="-07:00">
                        (GMT-07:00) Arizona
                      </option>
                      <option value="America/Belize" data-timezone="-06:00">
                        (GMT-06:00) Central America
                      </option>
                      <option value="America/Chicago" data-timezone="-06:00">
                        (GMT-06:00) Central Time (US and Canada)
                      </option>
                      <option value="America/Chihuahua" data-timezone="-06:00">
                        (GMT-06:00) Chihuahua, La Paz, Mazatlan
                      </option>
                      <option
                        value="America/Mexico_City"
                        data-timezone="-06:00"
                      >
                        (GMT-06:00) Guadalajara, Mexico City, Monterrey
                      </option>
                      <option value="America/Regina" data-timezone="-06:00">
                        (GMT-06:00) Saskatchewan
                      </option>
                      <option value="America/Bogota" data-timezone="-05:00">
                        (GMT-05:00) Bogota, Lima, Quito
                      </option>
                      <option value="America/Detroit" data-timezone="-05:00">
                        (GMT-05:00) Eastern Time (US and Canada)
                      </option>
                      <option
                        value="America/Indiana/Indianapolis"
                        data-timezone="-05:00"
                      >
                        (GMT-05:00) Indiana (East)
                      </option>
                      <option value="America/Caracas" data-timezone="-04:00">
                        (GMT-04:00) Caracas, La Paz
                      </option>
                      <option value="America/Glace_Bay" data-timezone="-04:00">
                        (GMT-04:00) Atlantic Time (Canada)
                      </option>
                      <option value="America/St_Johns" data-timezone="-03:30">
                        (GMT-03:30) Newfoundland and Labrador
                      </option>
                      <option
                        value="America/Argentina/Buenos_Aires"
                        data-timezone="-03:00"
                      >
                        (GMT-03:00) Buenos Aires, Georgetown
                      </option>
                      <option value="America/Santiago" data-timezone="-03:00">
                        (GMT-03:00) Santiago
                      </option>
                      <option value="America/Sao_Paulo" data-timezone="-03:00">
                        (GMT-03:00) Brasilia
                      </option>
                      <option value="America/Godthab" data-timezone="-02:00">
                        (GMT-02:00) Greenland
                      </option>
                      <option value="Etc/GMT+2" data-timezone="-02:00">
                        (GMT-02:00) Mid-Atlantic
                      </option>
                      <option value="Atlantic/Azores" data-timezone="-01:00">
                        (GMT-01:00) Azores
                      </option>
                      <option
                        value="Atlantic/Cape_Verde"
                        data-timezone="-01:00"
                      >
                        (GMT-01:00) Cape Verde Islands
                      </option>
                      <option value="Atlantic/Canary" data-timezone="">
                        (GMT) Canary Islands
                      </option>
                      <option value="GMT" data-timezone="">
                        (GMT) Dublin, Edinburgh, Lisbon, London
                      </option>
                      <option value="Africa/Algiers" data-timezone="+01:00">
                        (GMT+01:00) West Central Africa
                      </option>
                      <option value="Africa/Casablanca" data-timezone="+01:00">
                        (GMT+01:00) Casablanca, Monrovia
                      </option>
                      <option value="Europe/Amsterdam" data-timezone="+01:00">
                        (GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm,
                        Vienna
                      </option>
                      <option value="Europe/Belgrade" data-timezone="+01:00">
                        (GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana,
                        Prague
                      </option>
                      <option value="Europe/Brussels" data-timezone="+01:00">
                        (GMT+01:00) Brussels, Copenhagen, Madrid, Paris
                      </option>
                      <option value="Europe/Sarajevo" data-timezone="+01:00">
                        (GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb
                      </option>
                      <option value="Africa/Cairo" data-timezone="+02:00">
                        (GMT+02:00) Cairo
                      </option>
                      <option value="Africa/Harare" data-timezone="+02:00">
                        (GMT+02:00) Harare, Pretoria
                      </option>
                      <option value="Asia/Jerusalem" data-timezone="+02:00">
                        (GMT+02:00) Jerusalem
                      </option>
                      <option value="Europe/Athens" data-timezone="+02:00">
                        (GMT+02:00) Athens, Istanbul, Minsk
                      </option>
                      <option value="Europe/Bucharest" data-timezone="+02:00">
                        (GMT+02:00) Bucharest
                      </option>
                      <option value="Europe/Helsinki" data-timezone="+02:00">
                        (GMT+02:00) Helsinki, Kiev, Riga, Sofia, Tallinn,
                        Vilnius
                      </option>
                      <option value="Africa/Nairobi" data-timezone="+03:00">
                        (GMT+03:00) Nairobi
                      </option>
                      <option value="Asia/Baghdad" data-timezone="+03:00">
                        (GMT+03:00) Baghdad
                      </option>
                      <option value="Asia/Kuwait" data-timezone="+03:00">
                        (GMT+03:00) Kuwait, Riyadh
                      </option>
                      <option value="Europe/Moscow" data-timezone="+03:00">
                        (GMT+03:00) Moscow, St. Petersburg, Volgograd
                      </option>
                      <option value="Asia/Tehran" data-timezone="+03:30">
                        (GMT+03:30) Tehran
                      </option>
                      <option value="Asia/Baku" data-timezone="+04:00">
                        (GMT+04:00) Baku, Tbilisi, Yerevan
                      </option>
                      <option value="Asia/Dubai" data-timezone="+04:00">
                        (GMT+04:00) Abu Dhabi, Muscat
                      </option>
                      <option value="Asia/Kabul" data-timezone="+04:30">
                        (GMT+04:30) Kabul
                      </option>
                      <option value="Asia/Almaty" data-timezone="+05:00">
                        (GMT+05:00) Almaty, Novosibirsk
                      </option>
                      <option value="Asia/Karachi" data-timezone="+05:00">
                        (GMT+05:00) Islamabad, Karachi, Tashkent
                      </option>
                      <option value="Asia/Yekaterinburg" data-timezone="+05:00">
                        (GMT+05:00) Ekaterinburg
                      </option>
                      <option value="Asia/Colombo" data-timezone="+05:30">
                        (GMT+05:30) Sri Jayawardenepura
                      </option>
                      <option value="Asia/Kolkata" data-timezone="+05:30">
                        (GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi
                      </option>
                      <option value="Asia/Kathmandu" data-timezone="+05:45">
                        (GMT+05:45) Kathmandu
                      </option>
                      <option value="Asia/Dhaka" data-timezone="+06:00">
                        (GMT+06:00) Astana, Dhaka
                      </option>
                      <option value="Asia/Rangoon" data-timezone="+06:30">
                        (GMT+06:30) Yangon Rangoon
                      </option>
                      <option value="Asia/Bangkok" data-timezone="+07:00">
                        (GMT+07:00) Bangkok, Hanoi, Jakarta
                      </option>
                      <option value="Asia/Krasnoyarsk" data-timezone="+07:00">
                        (GMT+07:00) Krasnoyarsk
                      </option>
                      <option value="Asia/Irkutsk" data-timezone="+08:00">
                        (GMT+08:00) Irkutsk, Ulaanbaatar
                      </option>
                      <option value="Asia/Kuala_Lumpur" data-timezone="+08:00">
                        (GMT+08:00) Kuala Lumpur, Singapore
                      </option>
                      <option value="Asia/Shanghai" data-timezone="+08:00">
                        (GMT+08:00) Beijing, Chongqing, Hong Kong SAR, Urumqi
                      </option>
                      <option value="Asia/Taipei" data-timezone="+08:00">
                        (GMT+08:00) Taipei
                      </option>
                      <option value="Australia/Perth" data-timezone="+08:00">
                        (GMT+08:00) Perth
                      </option>
                      <option value="Asia/Seoul" data-timezone="+09:00">
                        (GMT+09:00) Seoul
                      </option>
                      <option value="Asia/Tokyo" data-timezone="+09:00">
                        (GMT+09:00) Osaka, Sapporo, Tokyo
                      </option>
                      <option value="Asia/Yakutsk" data-timezone="+09:00">
                        (GMT+09:00) Yakutsk
                      </option>
                      <option value="Australia/Darwin" data-timezone="+09:30">
                        (GMT+09:30) Darwin
                      </option>
                      <option value="Asia/Vladivostok" data-timezone="+10:00">
                        (GMT+10:00) Vladivostok
                      </option>
                      <option value="Australia/Brisbane" data-timezone="+10:00">
                        (GMT+10:00) Brisbane
                      </option>
                      <option value="Pacific/Guam" data-timezone="+10:00">
                        (GMT+10:00) Guam, Port Moresby
                      </option>
                      <option value="Australia/Adelaide" data-timezone="+10:30">
                        (GMT+10:30) Adelaide
                      </option>
                      <option value="Asia/Magadan" data-timezone="+11:00">
                        (GMT+11:00) Magadan, Solomon Islands, New Caledonia
                      </option>
                      <option value="Australia/Hobart" data-timezone="+11:00">
                        (GMT+11:00) Hobart
                      </option>
                      <option value="Australia/Sydney" data-timezone="+11:00">
                        (GMT+11:00) Canberra, Melbourne, Sydney
                      </option>
                      <option value="Pacific/Fiji" data-timezone="+12:00">
                        (GMT+12:00) Fiji Islands, Kamchatka, Marshall Islands
                      </option>
                      <option value="Pacific/Auckland" data-timezone="+13:00">
                        (GMT+13:00) Auckland, Wellington
                      </option>
                      <option value="Pacific/Tongatapu" data-timezone="+13:00">
                        (GMT+13:00) Nukualofa
                      </option>
                    </select>
                    <span
                      className="select2 select2-container select2-container--default select2-container--below"
                      dir="ltr"
                      style={{ width: "446px" }}
                    >
                      <span className="selection">
                        <span
                          className="select2-selection select2-selection--single"
                          role="combobox"
                          aria-haspopup="true"
                          aria-expanded="false"
                          tabIndex={0}
                          aria-labelledby="select2-k5am-container"
                        >
                          <span
                            className="select2-selection__rendered"
                            id="select2-k5am-container"
                            title="(GMT-09:00) Alaska"
                          >
                            (GMT-09:00) Alaska
                          </span>
                          <span
                            className="select2-selection__arrow"
                            role="presentation"
                          >
                            <b role="presentation"></b>
                          </span>
                        </span>
                      </span>
                      <span
                        className="dropdown-wrapper"
                        aria-hidden="true"
                      ></span>
                    </span>
                  </div>
                  <div className="form-group text-right">
                    <button
                      onClick={handleSubmit}
                      className="btn btn-primary"
                      id="SaveTimezone"
                    >
                      Save &amp; Close
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTImeZone;
