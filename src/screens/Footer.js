import React from "react";
import "../styles/footer.css";

export default function Footer() {
	return (
		<div className="bodyimg">
			<div className="footerdiv">
				<img className="footerimg" src="/images/footerlogo1.png" alt="footerimg" />
				<br />
				<span className="footerspan1">
					Home<span className="sybmolspan">{">>"}</span>
				</span>
				<span className="footerspan2">
					PlayStation 5<span className="sybmolspan">{">>"}</span>
				</span>
				<span className="footerspan2">PS5 Games</span>
			</div>
			<div className="footerdiv2">
				<div className="line"></div>
				<div className="footercontainer">
					<div className="row">
						<div className="contentdiv col-md-2">
							<p className="footerhead">About</p>
							<p className="footercontent">About SIE</p>
							<p className="footercontent">Careers</p>
							<p className="footercontent">PlayStation Studios</p>
							<p className="footercontent">PlayStation Productions</p>
							<p className="footercontent">Corporate</p>
						</div>
						<div className="contentdiv col-md-2">
							<p className="footerhead">Products</p>
							<p className="footercontent">PS5</p>
							<p className="footercontent">PS4</p>
							<p className="footercontent">PS VR2</p>
							<p className="footercontent">PS Plus</p>
							<p className="footercontent">Games</p>
						</div>
						<div className="contentdiv col-md-2">
							<p className="footerhead">Values</p>
							<p className="footercontent">Environment</p>
							<p className="footercontent">Accessibility</p>
							<p className="footercontent">Online safety</p>
							<p className="footercontent">Diversity, equity & inclusion</p>
						</div>
						<div className="contentdiv col-md-2">
							<p className="footerhead">Support</p>
							<p className="footercontent">Support hub</p>
							<p className="footercontent">PlayStation Safety</p>
							<p className="footercontent">PSN Status</p>
							<p className="footercontent">PlayStation Repairs</p>
							<p className="footercontent">Password reset</p>
						</div>
						<div className="contentdiv col-md-2">
							<p className="footerhead">Resources</p>
							<p className="footercontent">PSN terms of service</p>
							<p className="footercontent">PS Store cancellation policy</p>
							<p className="footercontent">Age ratings</p>
							<p className="footercontent">Health warning</p>
							<p className="footercontent">Developers</p>
						</div>
						<div className="contentdiv col-md-2">
							<p className="footerhead">Connect</p>
							<p className="footercontentlogo">
								<span className="logo">
									<i className="fa-brands fa-square-facebook fa-2xl"></i>
								</span>
								<span className="logo">
									<i className="fa-brands move fa-x-twitter fa-2xl"></i>
								</span>
								<span className="logo">
									<i className="fa-brands move fa-instagram fa-2xl"></i>
								</span>
								<span className="logo">
									<i className="fa-brands move fa-youtube fa-2xl"></i>
								</span>
							</p>
							<p className="footercontent">ios APP</p>
							<p className="footercontent">Android APP</p>
						</div>
					</div>
					<div className="line"></div>
				</div>
			</div>
			<div className="foooterdiv3">
				<img src="/images/footerlogo2.png" alt="interavtiveEntertainmentlogo" className="footerimg2" />
				<p className="footercontentcopyright">
					<i className="fa fa-copyright"></i>
					<span className="footercontentname">2024 Muhammed Faraan</span>
					<p className="footercontentrights">
						All content, games titles, trade names and/or trade dress, trademarks, artworks and associated imagery and
						<span className="movebottom">
							trademarks and/or copyright material of their respective owners. All rights reserved.
						</span>
						<span className="moreinfo">More Info</span>
					</p>
				</p>
			</div>
			<div className="line"></div>
			<div className="final">
				<p className="finalp">
					<span className="spanfinal">Legal | </span>
					<span className="spanfinal"> Privacy policy | </span>
					<span className="spanfinal"> Website terms of use | </span>
					<span className="spanfinal"> Site Map | </span>
					<span className="spanfinal"> Cookies Policy | </span>
					<span className="spanfinal"> Software Usage Terms</span>
				</p>
			</div>
		</div>
	);
}
