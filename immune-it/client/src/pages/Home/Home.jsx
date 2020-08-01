import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';
import '../Home/Home.scss';

export class Home extends Component {
    render() {
        return (
            <div className="home">
                <Header />
                <div className="home__main">
                    <div className="hero">
                        <video autoPlay muted loop id="myVideo" src={require('../../assets/production ID_4121354.mp4')} type='video/mp4' />
                        <div className="hero__text-wrap">
                            <h1 className="hero__header">Immunity is the <span className="hero__header-key">key</span> to <span className="hero__header-strength">strength</span></h1>
                            <p className="hero__text">Track your vaccinations, take a step towards good health!</p>
                            <Link to="/records"><button className="hero__CTA">Get started</button></Link>
                        </div>
                    </div>
                    <section className="home__body">
                        <h4>Routine Schedule for Individuals Starting Immunization in<br /> Infancy as of March 2015</h4>
                        <table className="table table-striped table-responsive w-auto p-3 h-100 d-md-inline-block" id="immunization-schedule" style={{ marginTop: 20 }} >
                            <thead>
                                <tr>
                                    <th>Age</th>
                                    <th>Vaccines</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>2 Months</td>
                                    <td>
                                        <li>Diphtheria, Tetanus, Pertussis, Polio, Haemophilus Influenza Type B (DTaP-IPV-HiB)</li>
                                        <li>Pneumococcal (Pneu-C-13)</li>
                                        <li>Rotavirus (Rot-1)</li>
                                    </td>
                                </tr>
                                <tr>
                                    <td>4 Months</td>
                                    <td>
                                        <li>Diphtheria, Tetanus, Pertussis, Polio, Haemophilus Influenza Type B (DTaP-IPV-HiB)</li>
                                        <li>Pneumococcal (Pneu-C-13)</li>
                                        <li>Rotavirus (Rot-1)</li>
                                    </td>
                                </tr>
                                <tr>
                                    <td>6 Months</td>
                                    <td>
                                        <li>Diphtheria, Tetanus, Pertussis, Polio, Haemophilus Influenza Type B (DTaP-IPV-HiB)</li>
                                    </td>
                                </tr>
                                <tr>
                                    <td>12 Months</td>
                                    <td>
                                        <li>Measles, Mumps, Rubella (MMR)*</li>
                                        <li>Meningococcal (Men-C-C)</li>
                                        <li>Pneumococcal (Pneu-C-13)</li>
                                    </td>
                                </tr>
                                <tr>
                                    <td>15 Months</td>
                                    <td>
                                        <li>Varicella (Var)</li>
                                    </td>
                                </tr>
                                <tr>
                                    <td>18 Months</td>
                                    <td>
                                        <li>Diphtheria, Tetanus, Pertussis, Polio, Haemophilus Influenza Type B (DTaP-IPV-HiB)</li>
                                    </td>
                                </tr>
                                <tr>
                                    <td>4-6 Years</td>
                                    <td>
                                        <li>Tetanus, Diphtheria, Pertussis, Polio (Tdap-IPV)</li>
                                        <li>Measles, Mumps, Rubella, Varicella (MMRV)</li>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Grade 7/8</td>
                                    <td>
                                        <li>Hepatitis B (HB)</li>
                                        <li>Meningococcal (Men-C-ACYW)</li>
                                        <li>Human papillomavirus (HPV-4) - females</li>
                                    </td>
                                </tr>
                                <tr>
                                    <td>14-16 Years</td>
                                    <td>
                                        <li>Tetanus, Diphtheria, Pertussis (Tdap)**</li>
                                    </td>
                                </tr>
                                <tr>
                                    <td>18 Years and Older</td>
                                    <td>
                                        <li>Tetanus, Diphtheria, Pertussis (Tdap)*** once in adulthood to replace a dose of Td</li>
                                        <li>Tetanus, Diphtheria (Td) once every 10 years</li>
                                    </td>
                                </tr>
                                <tr>
                                    <td>65 Years</td>
                                    <td>
                                        <li>Pneumococcal (Pneu-P-23)</li>
                                    </td>
                                </tr>
                                <tr>
                                    <td>6 Months and Older</td>
                                    <td>
                                        <li>Influenza (Inf) every year in the fall</li>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <p>
                            * MMR must be given on or after the first birthday<br />
                            ** Tdap is recommended 10 years after the 4-6 year old dose<br />
                            *** Adults who are dur for a Td dose may receive 1 dose of Tdap. Once the dose of Tdap is given, adults should receive Td every 10 years<br />
                            Refer to <i>Publicly Funded Immunization Schedules for Ontario</i> at <strong><a className="home__link" href="https://www.ontario.ca/page/vaccines">ontario.ca/vaccines</a></strong> for further information.
                        </p>
                    </section>
                </div>
            </div>
        )
    }
}

export default Home
