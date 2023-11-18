import React, { useEffect, useState } from 'react'
import analyticsGoogle from '../../assets/certificados/analyticsGoogle.png'
import googlePartner from '../../assets/certificados/googlePartner.png'
import lines from '../../assets/certificados/lines.svg'
import linesXl from '../../assets/certificados/linesXl.svg'
import metaBusiness from '../../assets/certificados/metaBusiness.png'
import rdStation from '../../assets/certificados/rdStation.png'
import rockCont from '../../assets/certificados/rockCont.png'


import analyticsGoogleW from '../../assets/certificados/analyticsGoogleW.png'
import googlePartnerW from '../../assets/certificados/googlePartnerW.png'
import metaBusinessW from '../../assets/certificados/metaBusinessW.png'
import rdStationW from '../../assets/certificados/rdStationW.png'
import rockContW from '../../assets/certificados/rockContW.png'

const Certification = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)
	const [line, setLine] = useState(lines)

	useEffect(() => {
		const handleWindowResize = () => {
			const newWidth = window.innerWidth
			setWindowWidth(newWidth)
			setLine(newWidth >= 768 ? linesXl : lines)
		}

		window.addEventListener('resize', handleWindowResize)

		return () => {
			window.removeEventListener('resize', handleWindowResize)
		}
	}, [])

	return (
		<section className="section-test">
			<div className="container-test">
				<div className="slider">
					<div className="slide-track">
						<div className="slide block dark:hidden ">
							<img src={rockContW} height="100" width="250" alt="" />
						</div>
						<div className="slide block dark:hidden">
							<img src={rdStationW} height="100" width="250" alt="" />
						</div>
						<div className="slide block dark:hidden">
							<img src={metaBusinessW} height="100" width="250" alt="" />
						</div>
						<div className="slide block dark:hidden">
							<img src={googlePartnerW} height="100" width="250" alt="" />
						</div>
						<div className="slide block dark:hidden">
							<img src={analyticsGoogleW} height="100" width="250" alt="" />
						</div>
						<div className="slide hidden dark:block">
							<img src={rockCont} height="100" width="250" alt="" />
						</div>
						<div className="slide hidden dark:block">
							<img src={rdStation} height="100" width="250" alt="" />
						</div>
						<div className="slide hidden dark:block">
							<img src={metaBusiness} height="100" width="250" alt="" />
						</div>
						<div className="slide hidden dark:block">
							<img src={googlePartner} height="100" width="250" alt="" />
						</div>
						<div className="slide hidden dark:block">
							<img src={analyticsGoogle} height="100" width="250" alt="" />
						</div>
						<div className="slide block dark:hidden ">
							<img src={rockContW} height="100" width="250" alt="" />
						</div>
						<div className="slide block dark:hidden">
							<img src={rdStationW} height="100" width="250" alt="" />
						</div>
						<div className="slide block dark:hidden">
							<img src={metaBusinessW} height="100" width="250" alt="" />
						</div>
						<div className="slide block dark:hidden">
							<img src={googlePartnerW} height="100" width="250" alt="" />
						</div>
						<div className="slide block dark:hidden">
							<img src={analyticsGoogleW} height="100" width="250" alt="" />
						</div>
						<div className="slide hidden dark:block">
							<img src={rockCont} height="100" width="250" alt="" />
						</div>
						<div className="slide hidden dark:block">
							<img src={rdStation} height="100" width="250" alt="" />
						</div>
						<div className="slide hidden dark:block">
							<img src={metaBusiness} height="100" width="250" alt="" />
						</div>
						<div className="slide hidden dark:block">
							<img src={googlePartner} height="100" width="250" alt="" />
						</div>
						<div className="slide hidden dark:block">
							<img src={analyticsGoogle} height="100" width="250" alt="" />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Certification
