const aperture_blade_path = [];
const logo = document.querySelector(".logo");
const aperture_animation_duration = 0.1;

for(var blade = 1; blade < 9; blade++){
	aperture_blade_path[blade-1] = document.querySelector(".aperture_blade_path-" + blade);
}

const aperture_close_tl = new TimelineMax({paused: true});

logo.addEventListener("mouseenter", _ => {
	aperture_close_tl.play();
});


logo.addEventListener("mouseleave", _ => {
	aperture_close_tl.play();
	aperture_close_tl.reverse();
});

aperture_close_tl.to(aperture_blade_path[0], aperture_animation_duration, {attr:{d: "M81.766757 93.590384c-.662652.859743-1.150305 1.85574-1.418152 2.940009-.171919.695942-.241433 1.489539-.205335 2.253488l5.062312 1.631779z", repeat: 1, yoyo: true}}, 'aperture_close')
				 .to(aperture_blade_path[1], aperture_animation_duration, {attr:{d: "M80.204973 99.453809c.0057.04183.0097.08465.01607.126.276003 1.783781 1.194083 3.420881 2.53608 4.629871l4.643349-2.38105z", yoyo: true}}, 'aperture_close')
				 .to(aperture_blade_path[2], aperture_animation_duration, {attr:{d: "M89.950042 101.27643l-6.672834 3.36156c.450177.34228.937017.64227 1.458079.88564.900081.4204 1.875956.6643 2.861711.71607.253406.0133.503574.0127.751854.004z", yoyo: true}}, 'aperture_close')
				 .to(aperture_blade_path[3], aperture_animation_duration, {attr:{d: "M91.360934 99.083065l-2.343712 7.107355c1.250833-.15021 2.427875-.59012 3.504676-1.32015.375006-.25423.645112-.47731 1.024598-.84571.07866-.0763.155155-.1537.230223-.23229z", yoyo: true}}, 'aperture_close')
	 			 .to(aperture_blade_path[4], aperture_animation_duration, {attr:{d: "M90.81047573 96.5336407l3.4054785 6.75979452c.97767245-1.20036959 1.57049785-2.61438228 1.7213421-4.13152955.02153709-.2167943.02832894-.60942272.02375959-.96945184z", yoyo: true}}, 'aperture_close')
				 .to(aperture_blade_path[5], aperture_animation_duration, {attr:{d: "M93.47079 92.63164l-4.855421 2.488896 7.314762 2.413712c-.198818-1.855193-1.077903-3.60337-2.459341-4.902608z", yoyo: true}}, 'aperture_close')
				 .to(aperture_blade_path[6], aperture_animation_duration, {attr:{d: "M88.073517 90.488071c-.115257.000004-.227258.0024-.338596.0062l-1.667039 5.178977 6.897871-3.475119c-.415875-.332428-.825451-.596367-1.345043-.85967-1.141316-.578367-2.276691-.850436-3.547193-.850375z", yoyo: true}}, 'aperture_close')
				 .to(aperture_blade_path[7], aperture_animation_duration, {attr:{d: "M87.07065386 90.54434194c-.64481339.07455165-1.24384327.2259383-1.8598356.46819079-1.17170728.46078774-2.19382708 1.1724878-3.0106699 2.06498822l2.45463216 4.78833915z", yoyo: true}}, 'aperture_close');