// Comprehensive country data with flags and codes (195+ countries, Israel excluded)
const countries = [
    { name: 'Afghanistan', code: '+93', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23000" d="M0 0h640v160H0z"/%3E%3Cpath fill="%23c8102e" d="M0 160h640v160H0z"/%3E%3Cpath fill="%23007a3d" d="M0 320h640v160H0z"/%3E%3C/svg%3E' },
    { name: 'Albania', code: '+355', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23e41e20" d="M0 0h640v480H0z"/%3E%3C/svg%3E' },
    { name: 'Algeria', code: '+213', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23fff" d="M320 0h320v480H320z"/%3E%3Cpath fill="%23006233" d="M0 0h320v480H0z"/%3E%3C/svg%3E' },
    { name: 'Andorra', code: '+376', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23002fa7" d="M0 0h213v480H0z"/%3E%3Cpath fill="%23fedf00" d="M213 0h214v480H213z"/%3E%3Cpath fill="%23c8102e" d="M427 0h213v480H427z"/%3E%3C/svg%3E' },
    { name: 'Angola', code: '+244', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23ce1126" d="M0 0h640v240H0z"/%3E%3Cpath fill="%23000" d="M0 240h640v240H0z"/%3E%3C/svg%3E' },
    { name: 'Antigua and Barbuda', code: '+1-268', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23000" d="M0 0h640v480H0z"/%3E%3C/svg%3E' },
    { name: 'Argentina', code: '+54', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%2375aadb" d="M0 0h640v160H0z"/%3E%3Cpath fill="%23fff" d="M0 160h640v160H0z"/%3E%3Cpath fill="%2375aadb" d="M0 320h640v160H0z"/%3E%3C/svg%3E' },
    { name: 'Armenia', code: '+374', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23d90012" d="M0 0h640v160H0z"/%3E%3Cpath fill="%230033a0" d="M0 160h640v160H0z"/%3E%3Cpath fill="%23f2a800" d="M0 320h640v160H0z"/%3E%3C/svg%3E' },
    { name: 'Australia', code: '+61', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23006" d="M0 0h640v480H0z"/%3E%3C/svg%3E' },
    { name: 'Austria', code: '+43', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23ed2939" d="M0 0h640v160H0z"/%3E%3Cpath fill="%23fff" d="M0 160h640v160H0z"/%3E%3Cpath fill="%23ed2939" d="M0 320h640v160H0z"/%3E%3C/svg%3E' },
    { name: 'Azerbaijan', code: '+994', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%230092bc" d="M0 0h640v160H0z"/%3E%3Cpath fill="%23ee2a35" d="M0 160h640v160H0z"/%3E%3Cpath fill="%2300b24c" d="M0 320h640v160H0z"/%3E%3C/svg%3E' },
    { name: 'Bahamas', code: '+1-242', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%2300abc9" d="M0 0h640v160H0z"/%3E%3Cpath fill="%23ffc72c" d="M0 160h640v160H0z"/%3E%3Cpath fill="%2300abc9" d="M0 320h640v160H0z"/%3E%3C/svg%3E' },
    { name: 'Bahrain', code: '+973', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23fff" d="M0 0h200v480H0z"/%3E%3Cpath fill="%23ce1126" d="M200 0h440v480H200z"/%3E%3C/svg%3E' },
    { name: 'Bangladesh', code: '+880', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23006a4e" d="M0 0h640v480H0z"/%3E%3Ccircle cx="280" cy="240" r="160" fill="%23f42a41"/%3E%3C/svg%3E' },
    { name: 'Barbados', code: '+1-246', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23001489" d="M0 0h213v480H0z"/%3E%3Cpath fill="%23ffc72c" d="M213 0h214v480H213z"/%3E%3Cpath fill="%23001489" d="M427 0h213v480H427z"/%3E%3C/svg%3E' },
    { name: 'Belarus', code: '+375', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23ce2b37" d="M0 0h640v320H0z"/%3E%3Cpath fill="%2300af65" d="M0 320h640v160H0z"/%3E%3C/svg%3E' },
    { name: 'Belgium', code: '+32', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23000" d="M0 0h213v480H0z"/%3E%3Cpath fill="%23fdda24" d="M213 0h214v480H213z"/%3E%3Cpath fill="%23ef3340" d="M427 0h213v480H427z"/%3E%3C/svg%3E' },
    { name: 'Belize', code: '+501', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23003f87" d="M0 0h640v480H0z"/%3E%3C/svg%3E' },
    { name: 'Benin', code: '+229', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23008751" d="M0 0h213v480H0z"/%3E%3Cpath fill="%23fcd116" d="M213 0h427v240H213z"/%3E%3Cpath fill="%23e8112d" d="M213 240h427v240H213z"/%3E%3C/svg%3E' },
    { name: 'Bhutan', code: '+975', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23ff4e12" d="M0 0l640 480V0z"/%3E%3Cpath fill="%23ffd520" d="M0 0v480h640z"/%3E%3C/svg%3E' },
    { name: 'Bolivia', code: '+591', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23d52b1e" d="M0 0h640v160H0z"/%3E%3Cpath fill="%23ffd200" d="M0 160h640v160H0z"/%3E%3Cpath fill="%23007a3d" d="M0 320h640v160H0z"/%3E%3C/svg%3E' },
    { name: 'Bosnia and Herzegovina', code: '+387', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23002395" d="M0 0h640v480H0z"/%3E%3C/svg%3E' },
    { name: 'Botswana', code: '+267', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%2375aadb" d="M0 0h640v160H0z"/%3E%3Cpath fill="%23fff" d="M0 160h640v40H0z"/%3E%3Cpath fill="%23000" d="M0 200h640v80H0z"/%3E%3Cpath fill="%23fff" d="M0 280h640v40H0z"/%3E%3Cpath fill="%2375aadb" d="M0 320h640v160H0z"/%3E%3C/svg%3E' },
    { name: 'Brazil', code: '+55', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23009b3a" d="M0 0h640v480H0z"/%3E%3C/svg%3E' },
    { name: 'Brunei', code: '+673', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23fcd116" d="M0 0h640v480H0z"/%3E%3C/svg%3E' },
    { name: 'Bulgaria', code: '+359', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23fff" d="M0 0h640v160H0z"/%3E%3Cpath fill="%2300966e" d="M0 160h640v160H0z"/%3E%3Cpath fill="%23d62612" d="M0 320h640v160H0z"/%3E%3C/svg%3E' },
    { name: 'Burkina Faso', code: '+226', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23de0000" d="M0 0h640v240H0z"/%3E%3Cpath fill="%2335a100" d="M0 240h640v240H0z"/%3E%3C/svg%3E' },
    { name: 'Burundi', code: '+257', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23ce1126" d="M0 0h640v480H0z"/%3E%3C/svg%3E' },
    { name: 'Cambodia', code: '+855', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23032ea1" d="M0 0h640v160H0z"/%3E%3Cpath fill="%23e00025" d="M0 160h640v160H0z"/%3E%3Cpath fill="%23032ea1" d="M0 320h640v160H0z"/%3E%3C/svg%3E' },
    { name: 'Cameroon', code: '+237', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23007a5e" d="M0 0h213v480H0z"/%3E%3Cpath fill="%23ce1126" d="M213 0h214v480H213z"/%3E%3Cpath fill="%23fcd116" d="M427 0h213v480H427z"/%3E%3C/svg%3E' },
    { name: 'Canada', code: '+1', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23fff" d="M0 0h640v480H0z"/%3E%3Cpath fill="%23d52b1e" d="M0 0h213v480H0zm427 0h213v480H427z"/%3E%3C/svg%3E' },
    { name: 'Cape Verde', code: '+238', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23003893" d="M0 0h640v240H0z"/%3E%3Cpath fill="%23fff" d="M0 240h640v40H0z"/%3E%3Cpath fill="%23cf2027" d="M0 280h640v40H0z"/%3E%3Cpath fill="%23fff" d="M0 320h640v160H0z"/%3E%3C/svg%3E' },
    { name: 'Central African Republic', code: '+236', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23003082" d="M0 0h640v120H0z"/%3E%3Cpath fill="%23fff" d="M0 120h640v120H0z"/%3E%3Cpath fill="%23009e49" d="M0 240h640v120H0z"/%3E%3Cpath fill="%23ffce00" d="M0 360h640v120H0z"/%3E%3C/svg%3E' },
    { name: 'Chad', code: '+235', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23002664" d="M0 0h213v480H0z"/%3E%3Cpath fill="%23fecb00" d="M213 0h214v480H213z"/%3E%3Cpath fill="%23c8102e" d="M427 0h213v480H427z"/%3E%3C/svg%3E' },
    { name: 'Chile', code: '+56', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23fff" d="M0 0h640v240H0z"/%3E%3Cpath fill="%23d52b1e" d="M0 240h640v240H0z"/%3E%3Cpath fill="%230039a6" d="M0 0h213v240H0z"/%3E%3C/svg%3E' },
    { name: 'China', code: '+86', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23de2910" d="M0 0h640v480H0z"/%3E%3C/svg%3E' },
    { name: 'Colombia', code: '+57', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23fcd116" d="M0 0h640v240H0z"/%3E%3Cpath fill="%23003893" d="M0 240h640v120H0z"/%3E%3Cpath fill="%23ce1126" d="M0 360h640v120H0z"/%3E%3C/svg%3E' },
    { name: 'Comoros', code: '+269', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23ffc61e" d="M0 0h640v120H0z"/%3E%3Cpath fill="%23fff" d="M0 120h640v120H0z"/%3E%3Cpath fill="%23ce1126" d="M0 240h640v120H0z"/%3E%3Cpath fill="%233a75c4" d="M0 360h640v120H0z"/%3E%3C/svg%3E' },
    { name: 'Congo', code: '+242', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23009543" d="M0 0h640v160H0z"/%3E%3Cpath fill="%23fbde4a" d="M0 160h640v160H0z"/%3E%3Cpath fill="%23dc241f" d="M0 320h640v160H0z"/%3E%3C/svg%3E' },
    { name: 'Congo (DRC)', code: '+243', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23007fff" d="M0 0h640v480H0z"/%3E%3C/svg%3E' },
    { name: 'Costa Rica', code: '+506', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%230000b4" d="M0 0h640v96H0z"/%3E%3Cpath fill="%23fff" d="M0 96h640v96H0z"/%3E%3Cpath fill="%23d90000" d="M0 192h640v96H0z"/%3E%3Cpath fill="%23fff" d="M0 288h640v96H0z"/%3E%3Cpath fill="%230000b4" d="M0 384h640v96H0z"/%3E%3C/svg%3E' },
    { name: 'Croatia', code: '+385', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23ff0000" d="M0 0h640v160H0z"/%3E%3Cpath fill="%23fff" d="M0 160h640v160H0z"/%3E%3Cpath fill="%23171796" d="M0 320h640v160H0z"/%3E%3C/svg%3E' },
    { name: 'Cuba', code: '+53', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23002a8f" d="M0 0h640v96H0z"/%3E%3Cpath fill="%23fff" d="M0 96h640v96H0z"/%3E%3Cpath fill="%23002a8f" d="M0 192h640v96H0z"/%3E%3Cpath fill="%23fff" d="M0 288h640v96H0z"/%3E%3Cpath fill="%23002a8f" d="M0 384h640v96H0z"/%3E%3C/svg%3E' },
    { name: 'Cyprus', code: '+357', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23fff" d="M0 0h640v480H0z"/%3E%3C/svg%3E' },
    { name: 'Czech Republic', code: '+420', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23fff" d="M0 0h640v240H0z"/%3E%3Cpath fill="%23d7141a" d="M0 240h640v240H0z"/%3E%3Cpath fill="%2311457e" d="M0 0l320 240L0 480z"/%3E%3C/svg%3E' },
    { name: 'Denmark', code: '+45', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23c60c30" d="M0 0h640v480H0z"/%3E%3Cpath fill="%23fff" d="M205.7 0h68.6v480h-68.6z"/%3E%3Cpath fill="%23fff" d="M0 205.7h640v68.6H0z"/%3E%3C/svg%3E' },
    { name: 'Djibouti', code: '+253', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%2312ad2b" d="M0 240h640v240H0z"/%3E%3Cpath fill="%236ab2e7" d="M0 0h640v240H0z"/%3E%3C/svg%3E' },
    { name: 'Dominica', code: '+1-767', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23006b3f" d="M0 0h640v480H0z"/%3E%3C/svg%3E' },
    { name: 'Dominican Republic', code: '+1-809', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23002d62" d="M0 0h320v240H0z"/%3E%3Cpath fill="%23ce1126" d="M320 0h320v240H320z"/%3E%3Cpath fill="%23ce1126" d="M0 240h320v240H0z"/%3E%3Cpath fill="%23002d62" d="M320 240h320v240H320z"/%3E%3C/svg%3E' },
    { name: 'East Timor', code: '+670', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23dc241f" d="M0 0h640v480H0z"/%3E%3C/svg%3E' },
    { name: 'Ecuador', code: '+593', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23ffd100" d="M0 0h640v240H0z"/%3E%3Cpath fill="%230072ce" d="M0 240h640v120H0z"/%3E%3Cpath fill="%23da291c" d="M0 360h640v120H0z"/%3E%3C/svg%3E' },
    { name: 'Egypt', code: '+20', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23ce1126" d="M0 0h640v160H0z"/%3E%3Cpath fill="%23fff" d="M0 160h640v160H0z"/%3E%3Cpath fill="%23000" d="M0 320h640v160H0z"/%3E%3C/svg%3E' },
    { name: 'El Salvador', code: '+503', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%230f47af" d="M0 0h640v160H0z"/%3E%3Cpath fill="%23fff" d="M0 160h640v160H0z"/%3E%3Cpath fill="%230f47af" d="M0 320h640v160H0z"/%3E%3C/svg%3E' },
    { name: 'Equatorial Guinea', code: '+240', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%230072c6" d="M0 320h640v160H0z"/%3E%3Cpath fill="%23fff" d="M0 160h640v160H0z"/%3E%3Cpath fill="%233e9a00" d="M0 0h640v160H0z"/%3E%3C/svg%3E' },
    { name: 'Eritrea', code: '+291', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%2312a633" d="M0 240h640v240H0z"/%3E%3Cpath fill="%234189dd" d="M0 0h640v240H0z"/%3E%3C/svg%3E' },
    { name: 'Estonia', code: '+372', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%230072ce" d="M0 0h640v160H0z"/%3E%3Cpath fill="%23000" d="M0 160h640v160H0z"/%3E%3Cpath fill="%23fff" d="M0 320h640v160H0z"/%3E%3C/svg%3E' },
    { name: 'Eswatini', code: '+268', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%233e5eb9" d="M0 0h640v160H0z"/%3E%3Cpath fill="%23ffd900" d="M0 160h640v160H0z"/%3E%3Cpath fill="%233e5eb9" d="M0 320h640v160H0z"/%3E%3C/svg%3E' },
    { name: 'Ethiopia', code: '+251', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23078930" d="M0 0h640v160H0z"/%3E%3Cpath fill="%23fcdd09" d="M0 160h640v160H0z"/%3E%3Cpath fill="%23da121a" d="M0 320h640v160H0z"/%3E%3C/svg%3E' },
    { name: 'Fiji', code: '+679', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%2368bfe5" d="M0 0h640v480H0z"/%3E%3C/svg%3E' },
    { name: 'Finland', code: '+358', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23fff" d="M0 0h640v480H0z"/%3E%3Cpath fill="%23003580" d="M0 174.5h640v131H0z"/%3E%3Cpath fill="%23003580" d="M175.5 0h131v480h-131z"/%3E%3C/svg%3E' },
    { name: 'France', code: '+33', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23002395" d="M0 0h213v480H0z"/%3E%3Cpath fill="%23fff" d="M213 0h214v480H213z"/%3E%3Cpath fill="%23ED2939" d="M427 0h213v480H427z"/%3E%3C/svg%3E' },
    { name: 'Gabon', code: '+241', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%230093dd" d="M0 320h640v160H0z"/%3E%3Cpath fill="%23fff" d="M0 160h640v160H0z"/%3E%3Cpath fill="%23009e60" d="M0 0h640v160H0z"/%3E%3C/svg%3E' },
    { name: 'Gambia', code: '+220', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23ce1126" d="M0 0h640v160H0z"/%3E%3Cpath fill="%23fff" d="M0 160h640v40H0z"/%3E%3Cpath fill="%230c1c8c" d="M0 200h640v80H0z"/%3E%3Cpath fill="%23fff" d="M0 280h640v40H0z"/%3E%3Cpath fill="%23009639" d="M0 320h640v160H0z"/%3E%3C/svg%3E' },
    { name: 'Georgia', code: '+995', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23fff" d="M0 0h640v480H0z"/%3E%3Cpath fill="%23ff0000" d="M240 0h160v480H240z"/%3E%3Cpath fill="%23ff0000" d="M0 160h640v160H0z"/%3E%3C/svg%3E' },
    { name: 'Germany', code: '+49', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23000" d="M0 0h640v160H0z"/%3E%3Cpath fill="%23D00" d="M0 160h640v160H0z"/%3E%3Cpath fill="%23FFCE00" d="M0 320h640v160H0z"/%3E%3C/svg%3E' },
    { name: 'Ghana', code: '+233', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23ce1126" d="M0 0h640v160H0z"/%3E%3Cpath fill="%23fcd116" d="M0 160h640v160H0z"/%3E%3Cpath fill="%23006b3f" d="M0 320h640v160H0z"/%3E%3C/svg%3E' },
    { name: 'Greece', code: '+30', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%230d5eaf" d="M0 0h640v53.3H0z"/%3E%3Cpath fill="%23fff" d="M0 53.3h640v53.4H0z"/%3E%3Cpath fill="%230d5eaf" d="M0 106.7h640V160H0z"/%3E%3Cpath fill="%23fff" d="M0 160h640v53.3H0z"/%3E%3Cpath fill="%230d5eaf" d="M0 213.3h640v53.4H0z"/%3E%3Cpath fill="%23fff" d="M0 266.7h640V320H0z"/%3E%3Cpath fill="%230d5eaf" d="M0 320h640v53.3H0z"/%3E%3Cpath fill="%23fff" d="M0 373.3h640v53.4H0z"/%3E%3Cpath fill="%230d5eaf" d="M0 426.7h640V480H0z"/%3E%3C/svg%3E' },
    { name: 'Grenada', code: '+1-473', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23ce1126" d="M0 0h640v480H0z"/%3E%3C/svg%3E' },
    { name: 'Guatemala', code: '+502', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%234997d0" d="M0 0h213v480H0z"/%3E%3Cpath fill="%23fff" d="M213 0h214v480H213z"/%3E%3Cpath fill="%234997d0" d="M427 0h213v480H427z"/%3E%3C/svg%3E' },
    { name: 'Guinea', code: '+224', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23ce1126" d="M0 0h213v480H0z"/%3E%3Cpath fill="%23fcd116" d="M213 0h214v480H213z"/%3E%3Cpath fill="%23009460" d="M427 0h213v480H427z"/%3E%3C/svg%3E' },
    { name: 'Guinea-Bissau', code: '+245', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23fcd116" d="M0 240h640v240H0z"/%3E%3Cpath fill="%23009e49" d="M0 0h640v240H0z"/%3E%3C/svg%3E' },
    { name: 'Guyana', code: '+592', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23009e49" d="M0 0h640v480H0z"/%3E%3C/svg%3E' },
    { name: 'Haiti', code: '+509', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23d21034" d="M0 240h640v240H0z"/%3E%3Cpath fill="%23002395" d="M0 0h640v240H0z"/%3E%3C/svg%3E' },
    { name: 'Honduras', code: '+504', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%230073cf" d="M0 0h640v160H0z"/%3E%3Cpath fill="%23fff" d="M0 160h640v160H0z"/%3E%3Cpath fill="%230073cf" d="M0 320h640v160H0z"/%3E%3C/svg%3E' },
    { name: 'Hong Kong', code: '+852', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23de2910" d="M0 0h640v480H0z"/%3E%3C/svg%3E' },
    { name: 'Hungary', code: '+36', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23ce2939" d="M0 0h640v160H0z"/%3E%3Cpath fill="%23fff" d="M0 160h640v160H0z"/%3E%3Cpath fill="%23477050" d="M0 320h640v160H0z"/%3E%3C/svg%3E' },
    { name: 'Iceland', code: '+354', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23003897" d="M0 0h640v480H0z"/%3E%3Cpath fill="%23fff" d="M180 0h120v480H180z"/%3E%3Cpath fill="%23d72828" d="M210 0h60v480h-60z"/%3E%3Cpath fill="%23fff" d="M0 180h640v120H0z"/%3E%3Cpath fill="%23d72828" d="M0 210h640v60H0z"/%3E%3C/svg%3E' },
    { name: 'India', code: '+91', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23f93" d="M0 0h640v160H0z"/%3E%3Cpath fill="%23fff" d="M0 160h640v160H0z"/%3E%3Cpath fill="%23128807" d="M0 320h640v160H0z"/%3E%3C/svg%3E' },
    { name: 'Indonesia', code: '+62', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23e70011" d="M0 0h640v240H0z"/%3E%3Cpath fill="%23fff" d="M0 240h640v240H0z"/%3E%3C/svg%3E' },
    { name: 'Iran', code: '+98', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23239f40" d="M0 0h640v160H0z"/%3E%3Cpath fill="%23fff" d="M0 160h640v160H0z"/%3E%3Cpath fill="%23da0000" d="M0 320h640v160H0z"/%3E%3C/svg%3E' },
    { name: 'Iraq', code: '+964', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23ce1126" d="M0 0h640v160H0z"/%3E%3Cpath fill="%23fff" d="M0 160h640v160H0z"/%3E%3Cpath fill="%23000" d="M0 320h640v160H0z"/%3E%3C/svg%3E' },
    { name: 'Ireland', code: '+353', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23169b62" d="M0 0h213v480H0z"/%3E%3Cpath fill="%23fff" d="M213 0h214v480H213z"/%3E%3Cpath fill="%23ff883e" d="M427 0h213v480H427z"/%3E%3C/svg%3E' },
    { name: 'Italy', code: '+39',  flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23009246" d="M0 0h213v480H0z"/%3E%3Cpath fill="%23fff" d="M213 0h214v480H213z"/%3E%3Cpath fill="%23ce2b37" d="M427 0h213v480H427z"/%3E%3C/svg%3E' },
    { name: 'Jamaica', code: '+1-876', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23009b3a" d="M0 0h640v480H0z"/%3E%3C/svg%3E' },
    { name: 'Japan', code: '+81', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23fff" d="M0 0h640v480H0z"/%3E%3Ccircle cx="320" cy="240" r="96" fill="%23bc002d"/%3E%3C/svg%3E' },
    { name: 'Jordan', code: '+962', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23000" d="M0 0h640v160H0z"/%3E%3Cpath fill="%23fff" d="M0 160h640v160H0z"/%3E%3Cpath fill="%23007a3d" d="M0 320h640v160H0z"/%3E%3Cpath fill="%23ce1126" d="M0 0l320 240L0 480z"/%3E%3C/svg%3E' },
    { name: 'Kazakhstan', code: '+7', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%2300afca" d="M0 0h640v480H0z"/%3E%3C/svg%3E' },
    { name: 'Kenya', code: '+254', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23000" d="M0 0h640v160H0z"/%3E%3Cpath fill="%23fff" d="M0 160h640v40H0z"/%3E%3Cpath fill="%23b00" d="M0 200h640v80H0z"/%3E%3Cpath fill="%23fff" d="M0 280h640v40H0z"/%3E%3Cpath fill="%23060" d="M0 320h640v160H0z"/%3E%3C/svg%3E' },
    { name: 'Kiribati', code: '+686', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23e73e2e" d="M0 0h640v240H0z"/%3E%3Cpath fill="%23fff" d="M0 240h640v40H0z"/%3E%3Cpath fill="%23ffd100" d="M0 280h640v40H0z"/%3E%3Cpath fill="%23fff" d="M0 320h640v40H0z"/%3E%3Cpath fill="%2300b6de" d="M0 360h640v120H0z"/%3E%3C/svg%3E' },
    { name: 'Kosovo', code: '+383', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23244AA5" d="M0 0h640v480H0z"/%3E%3C/svg%3E' },
    { name: 'Kuwait', code: '+965', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23007a3d" d="M0 0h640v160H0z"/%3E%3Cpath fill="%23fff" d="M0 160h640v160H0z"/%3E%3Cpath fill="%23ce1126" d="M0 320h640v160H0z"/%3E%3Cpath fill="%23000" d="M0 0l200 240L0 480z"/%3E%3C/svg%3E' },
    { name: 'Kyrgyzstan', code: '+996', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23ee1c25" d="M0 0h640v480H0z"/%3E%3C/svg%3E' },
    { name: 'Laos', code: '+856', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23ce1126" d="M0 0h640v160H0z"/%3E%3Cpath fill="%23002868" d="M0 160h640v160H0z"/%3E%3Cpath fill="%23ce1126" d="M0 320h640v160H0z"/%3E%3C/svg%3E' },
    { name: 'Latvia', code: '+371', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%239e3039" d="M0 0h640v192H0z"/%3E%3Cpath fill="%23fff" d="M0 192h640v96H0z"/%3E%3Cpath fill="%239e3039" d="M0 288h640v192H0z"/%3E%3C/svg%3E' },
    { name: 'Lebanon', code: '+961', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23ed1c24" d="M0 0h640v160H0z"/%3E%3Cpath fill="%23fff" d="M0 160h640v160H0z"/%3E%3Cpath fill="%23ed1c24" d="M0 320h640v160H0z"/%3E%3C/svg%3E' },
    { name: 'Lesotho', code: '+266', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23002395" d="M0 0h640v160H0z"/%3E%3Cpath fill="%23fff" d="M0 160h640v160H0z"/%3E%3Cpath fill="%23009543" d="M0 320h640v160H0z"/%3E%3C/svg%3E' },
    { name: 'Liberia', code: '+231', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23fff" d="M0 0h640v44H0z"/%3E%3Cpath fill="%23bf0a30" d="M0 44h640v44H0z"/%3E%3Cpath fill="%23fff" d="M0 88h640v44H0z"/%3E%3Cpath fill="%23bf0a30" d="M0 132h640v44H0z"/%3E%3Cpath fill="%23fff" d="M0 176h640v44H0z"/%3E%3Cpath fill="%23bf0a30" d="M0 220h640v44H0z"/%3E%3Cpath fill="%23fff" d="M0 264h640v44H0z"/%3E%3Cpath fill="%23bf0a30" d="M0 308h640v44H0z"/%3E%3Cpath fill="%23fff" d="M0 352h640v44H0z"/%3E%3Cpath fill="%23bf0a30" d="M0 396h640v44H0z"/%3E%3Cpath fill="%23fff" d="M0 440h640v40H0z"/%3E%3C/svg%3E' },
    { name: 'Libya', code: '+218', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23e70013" d="M0 0h640v160H0z"/%3E%3Cpath fill="%23000" d="M0 160h640v160H0z"/%3E%3Cpath fill="%23239e46" d="M0 320h640v160H0z"/%3E%3C/svg%3E' },
    { name: 'Liechtenstein', code: '+423', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23002780" d="M0 0h640v240H0z"/%3E%3Cpath fill="%23ce1126" d="M0 240h640v240H0z"/%3E%3C/svg%3E' },
    { name: 'Lithuania', code: '+370', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23fdb913" d="M0 0h640v160H0z"/%3E%3Cpath fill="%2300843d" d="M0 160h640v160H0z"/%3E%3Cpath fill="%23c1272d" d="M0 320h640v160H0z"/%3E%3C/svg%3E' },
    { name: 'Luxembourg', code: '+352', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23ed2939" d="M0 0h640v160H0z"/%3E%3Cpath fill="%23fff" d="M0 160h640v160H0z"/%3E%3Cpath fill="%2300a1de" d="M0 320h640v160H0z"/%3E%3C/svg%3E' },
    { name: 'Madagascar', code: '+261', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23fff" d="M0 0h213v480H0z"/%3E%3Cpath fill="%23fc3d32" d="M213 0h427v240H213z"/%3E%3Cpath fill="%23007e3a" d="M213 240h427v240H213z"/%3E%3C/svg%3E' },
    { name: 'Malawi', code: '+265', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23000" d="M0 0h640v160H0z"/%3E%3Cpath fill="%23ce1126" d="M0 160h640v160H0z"/%3E%3Cpath fill="%23339e35" d="M0 320h640v160H0z"/%3E%3C/svg%3E' },
    { name: 'Malaysia', code: '+60', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23cc0001" d="M0 0h640v480H0z"/%3E%3C/svg%3E' },
    { name: 'Maldives', code: '+960', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23d21034" d="M0 0h640v480H0z"/%3E%3C/svg%3E' },
    { name: 'Mali', code: '+223', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%2314b53a" d="M0 0h213v480H0z"/%3E%3Cpath fill="%23fcd116" d="M213 0h214v480H213z"/%3E%3Cpath fill="%23ce1126" d="M427 0h213v480H427z"/%3E%3C/svg%3E' },
    { name: 'Malta', code: '+356', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23fff" d="M0 0h320v480H0z"/%3E%3Cpath fill="%23cf142b" d="M320 0h320v480H320z"/%3E%3C/svg%3E' },
    { name: 'Marshall Islands', code: '+692', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23003893" d="M0 0h640v480H0z"/%3E%3C/svg%3E' },
    { name: 'Mauritania', code: '+222', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23006233" d="M0 0h640v480H0z"/%3E%3C/svg%3E' },
    { name: 'Mauritius', code: '+230', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23ea2839" d="M0 0h640v120H0z"/%3E%3Cpath fill="%23071c7c" d="M0 120h640v120H0z"/%3E%3Cpath fill="%23ffd500" d="M0 240h640v120H0z"/%3E%3Cpath fill="%2300a650" d="M0 360h640v120H0z"/%3E%3C/svg%3E' },
    { name: 'Mexico', code: '+52', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23006847" d="M0 0h213v480H0z"/%3E%3Cpath fill="%23fff" d="M213 0h214v480H213z"/%3E%3Cpath fill="%23ce1126" d="M427 0h213v480H427z"/%3E%3C/svg%3E' },
    { name: 'Micronesia', code: '+691', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%2375b2dd" d="M0 0h640v480H0z"/%3E%3C/svg%3E' },
    { name: 'Moldova', code: '+373', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%230046ae" d="M0 0h213v480H0z"/%3E%3Cpath fill="%23ffd200" d="M213 0h214v480H213z"/%3E%3Cpath fill="%23cc092f" d="M427 0h213v480H427z"/%3E%3C/svg%3E' },
    { name: 'Monaco', code: '+377', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23ce1126" d="M0 0h640v240H0z"/%3E%3Cpath fill="%23fff" d="M0 240h640v240H0z"/%3E%3C/svg%3E' },
    { name: 'Mongolia', code: '+976', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23c4272f" d="M0 0h213v480H0z"/%3E%3Cpath fill="%23015197" d="M213 0h214v480H213z"/%3E%3Cpath fill="%23c4272f" d="M427 0h213v480H427z"/%3E%3C/svg%3E' },
    { name: 'Montenegro', code: '+382', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23c40308" d="M0 0h640v480H0z"/%3E%3C/svg%3E' },
    { name: 'Morocco', code: '+212', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23c1272d" d="M0 0h640v480H0z"/%3E%3C/svg%3E' },
    { name: 'Mozambique', code: '+258', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23009a44" d="M0 0h640v160H0z"/%3E%3Cpath fill="%23000" d="M0 160h640v20H0z"/%3E%3Cpath fill="%23fff" d="M0 180h640v120H0z"/%3E%3Cpath fill="%23000" d="M0 300h640v20H0z"/%3E%3Cpath fill="%23ffca00" d="M0 320h640v160H0z"/%3E%3C/svg%3E' },
    { name: 'Myanmar', code: '+95', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23fecb00" d="M0 0h640v160H0z"/%3E%3Cpath fill="%2334b233" d="M0 160h640v160H0z"/%3E%3Cpath fill="%23ea2839" d="M0 320h640v160H0z"/%3E%3C/svg%3E' },
    { name: 'Namibia', code: '+264', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23003580" d="M0 0h640v160H0z"/%3E%3Cpath fill="%23fff" d="M0 160h640v40H0z"/%3E%3Cpath fill="%23009543" d="M0 200h640v80H0z"/%3E%3Cpath fill="%23fff" d="M0 280h640v40H0z"/%3E%3Cpath fill="%23c8102e" d="M0 320h640v160H0z"/%3E%3C/svg%3E' },
    { name: 'Nauru', code: '+674', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23002170" d="M0 0h640v240H0z"/%3E%3Cpath fill="%23ffc61e" d="M0 240h640v20H0z"/%3E%3Cpath fill="%23002170" d="M0 260h640v220H0z"/%3E%3C/svg%3E' },
    { name: 'Nepal', code: '+977', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23dc143c" d="M0 0h640v480H0z"/%3E%3C/svg%3E' },
    { name: 'Netherlands', code: '+31', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23ae1c28" d="M0 0h640v160H0z"/%3E%3Cpath fill="%23fff" d="M0 160h640v160H0z"/%3E%3Cpath fill="%23224793" d="M0 320h640v160H0z"/%3E%3C/svg%3E' },
    { name: 'New Zealand', code: '+64', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%2300247d" d="M0 0h640v480H0z"/%3E%3C/svg%3E' },
    { name: 'Nicaragua', code: '+505', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%230067c6" d="M0 0h640v160H0z"/%3E%3Cpath fill="%23fff" d="M0 160h640v160H0z"/%3E%3Cpath fill="%230067c6" d="M0 320h640v160H0z"/%3E%3C/svg%3E' },
    { name: 'Niger', code: '+227', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23e05206" d="M0 0h640v160H0z"/%3E%3Cpath fill="%23fff" d="M0 160h640v160H0z"/%3E%3Cpath fill="%230db02b" d="M0 320h640v160H0z"/%3E%3C/svg%3E' },
    { name: 'Nigeria', code: '+234', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23008753" d="M0 0h213v480H0z"/%3E%3Cpath fill="%23fff" d="M213 0h214v480H213z"/%3E%3Cpath fill="%23008753" d="M427 0h213v480H427z"/%3E%3C/svg%3E' },
    { name: 'North Korea', code: '+850', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23024fa2" d="M0 0h640v96H0z"/%3E%3Cpath fill="%23fff" d="M0 96h640v40H0z"/%3E%3Cpath fill="%23ed1c27" d="M0 136h640v208H0z"/%3E%3Cpath fill="%23fff" d="M0 344h640v40H0z"/%3E%3Cpath fill="%23024fa2" d="M0 384h640v96H0z"/%3E%3C/svg%3E' },
    { name: 'North Macedonia', code: '+389', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23d20000" d="M0 0h640v480H0z"/%3E%3C/svg%3E' },
    { name: 'Norway', code: '+47', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23ef2b2d" d="M0 0h640v480H0z"/%3E%3Cpath fill="%23fff" d="M180 0h120v480H180z"/%3E%3Cpath fill="%23002868" d="M210 0h60v480h-60z"/%3E%3Cpath fill="%23fff" d="M0 180h640v120H0z"/%3E%3Cpath fill="%23002868" d="M0 210h640v60H0z"/%3E%3C/svg%3E' },
    { name: 'Oman', code: '+968', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23fff" d="M0 0h640v160H0z"/%3E%3Cpath fill="%23ce1126" d="M0 160h640v160H0z"/%3E%3Cpath fill="%23009900" d="M0 320h640v160H0z"/%3E%3Cpath fill="%23ce1126" d="M0 0h250v480H0z"/%3E%3C/svg%3E' },
    { name: 'Pakistan', code: '+92', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23115740" d="M0 0h640v480H0z"/%3E%3Cpath fill="%23fff" d="M0 0h160v480H0z"/%3E%3C/svg%3E' },
    { name: 'Palau', code: '+680', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%234aadd6" d="M0 0h640v480H0z"/%3E%3C/svg%3E' },
    { name: 'Palestine', code: '+970', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23000" d="M0 0h640v160H0z"/%3E%3Cpath fill="%23fff" d="M0 160h640v160H0z"/%3E%3Cpath fill="%23009736" d="M0 320h640v160H0z"/%3E%3Cpath fill="%23e4312b" d="M0 0l320 240L0 480z"/%3E%3C/svg%3E' },
    { name: 'Panama', code: '+507', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23fff" d="M0 0h320v240H0z"/%3E%3Cpath fill="%23da121a" d="M320 0h320v240H320z"/%3E%3Cpath fill="%23da121a" d="M0 240h320v240H0z"/%3E%3Cpath fill="%23053c8d" d="M320 240h320v240H320z"/%3E%3C/svg%3E' },
    { name: 'Papua New Guinea', code: '+675', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23000" d="M0 0l640 480V0z"/%3E%3Cpath fill="%23ce1126" d="M0 480h640L0 0z"/%3E%3C/svg%3E' },
    { name: 'Paraguay', code: '+595', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23d52b1e" d="M0 0h640v160H0z"/%3E%3Cpath fill="%23fff" d="M0 160h640v160H0z"/%3E%3Cpath fill="%230038a8" d="M0 320h640v160H0z"/%3E%3C/svg%3E' },
    { name: 'Peru', code: '+51', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23d91023" d="M0 0h213v480H0z"/%3E%3Cpath fill="%23fff" d="M213 0h214v480H213z"/%3E%3Cpath fill="%23d91023" d="M427 0h213v480H427z"/%3E%3C/svg%3E' },
    { name: 'Philippines', code: '+63', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23ce1126" d="M0 240h640v240H0z"/%3E%3Cpath fill="%230038a8" d="M0 0h640v240H0z"/%3E%3C/svg%3E' },
    { name: 'Poland', code: '+48', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23fff" d="M0 0h640v240H0z"/%3E%3Cpath fill="%23dc143c" d="M0 240h640v240H0z"/%3E%3C/svg%3E' },
    { name: 'Portugal', code: '+351', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23060" d="M0 0h256v480H0z"/%3E%3Cpath fill="%23f00" d="M256 0h384v480H256z"/%3E%3C/svg%3E' },
    { name: 'Qatar', code: '+974', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23fff" d="M0 0h200v480H0z"/%3E%3Cpath fill="%238d1b3d" d="M200 0h440v480H200z"/%3E%3C/svg%3E' },
    { name: 'Romania', code: '+40', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23002b7f" d="M0 0h213v480H0z"/%3E%3Cpath fill="%23fcd116" d="M213 0h214v480H213z"/%3E%3Cpath fill="%23ce1126" d="M427 0h213v480H427z"/%3E%3C/svg%3E' },
    { name: 'Russia', code: '+7', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23fff" d="M0 0h640v160H0z"/%3E%3Cpath fill="%23d52b1e" d="M0 320h640v160H0z"/%3E%3Cpath fill="%230039a6" d="M0 160h640v160H0z"/%3E%3C/svg%3E' },
    { name: 'Rwanda', code: '+250', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%2300a1de" d="M0 0h640v360H0z"/%3E%3Cpath fill="%23fad201" d="M0 360h640v120H0z"/%3E%3Cpath fill="%2300a94f" d="M0 240h640v120H0z"/%3E%3C/svg%3E' },
    { name: 'Saint Kitts and Nevis', code: '+1-869', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%2300a651" d="M0 0h640v240H0z"/%3E%3Cpath fill="%23fcd116" d="M0 240h640v40H0z"/%3E%3Cpath fill="%23000" d="M0 280h640v120H0z"/%3E%3Cpath fill="%23ce1126" d="M0 400h640v80H0z"/%3E%3C/svg%3E' },
    { name: 'Saint Lucia', code: '+1-758', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%2365cfff" d="M0 0h640v480H0z"/%3E%3C/svg%3E' },
    { name: 'Saint Vincent and the Grenadines', code: '+1-784', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23009e49" d="M427 0h213v480H427z"/%3E%3Cpath fill="%230072c6" d="M0 0h213v480H0z"/%3E%3Cpath fill="%23fcd116" d="M213 0h214v480H213z"/%3E%3C/svg%3E' },
    { name: 'Samoa', code: '+685', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23ce1126" d="M0 0h640v480H0z"/%3E%3Cpath fill="%23002b7f" d="M0 0h320v240H0z"/%3E%3C/svg%3E' },
    { name: 'San Marino', code: '+378', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%2373b2e8" d="M0 240h640v240H0z"/%3E%3Cpath fill="%23fff" d="M0 0h640v240H0z"/%3E%3C/svg%3E' },
    { name: 'Sao Tome and Principe', code: '+239', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23ffce00" d="M0 160h640v160H0z"/%3E%3Cpath fill="%23009739" d="M0 0h640v160H0z"/%3E%3Cpath fill="%23009739" d="M0 320h640v160H0z"/%3E%3C/svg%3E' },
    { name: 'Saudi Arabia', code: '+966', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23165b33" d="M0 0h640v480H0z"/%3E%3C/svg%3E' },
    { name: 'Senegal', code: '+221', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%2300853f" d="M0 0h213v480H0z"/%3E%3Cpath fill="%23fdef42" d="M213 0h214v480H213z"/%3E%3Cpath fill="%23e31b23" d="M427 0h213v480H427z"/%3E%3C/svg%3E' },
    { name: 'Serbia', code: '+381', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23c6363c" d="M0 0h640v160H0z"/%3E%3Cpath fill="%23003893" d="M0 160h640v160H0z"/%3E%3Cpath fill="%23fff" d="M0 320h640v160H0z"/%3E%3C/svg%3E' },
    { name: 'Seychelles', code: '+248', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23003f87" d="M0 0h640v96H0z"/%3E%3Cpath fill="%23fcd856" d="M0 96h640v96H0z"/%3E%3Cpath fill="%23d62828" d="M0 192h640v96H0z"/%3E%3Cpath fill="%23fff" d="M0 288h640v96H0z"/%3E%3Cpath fill="%2300843d" d="M0 384h640v96H0z"/%3E%3C/svg%3E' },
    { name: 'Sierra Leone', code: '+232', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%231eb53a" d="M0 0h640v160H0z"/%3E%3Cpath fill="%23fff" d="M0 160h640v160H0z"/%3E%3Cpath fill="%230072c6" d="M0 320h640v160H0z"/%3E%3C/svg%3E' },
    { name: 'Singapore', code: '+65', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23fff" d="M0 0h640v480H0z"/%3E%3Cpath fill="%23ed2939" d="M0 0h640v240H0z"/%3E%3C/svg%3E' },
    { name: 'Slovakia', code: '+421', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23fff" d="M0 0h640v160H0z"/%3E%3Cpath fill="%230b4ea2" d="M0 160h640v160H0z"/%3E%3Cpath fill="%23ee1c25" d="M0 320h640v160H0z"/%3E%3C/svg%3E' },
    { name: 'Slovenia', code: '+386', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23fff" d="M0 0h640v160H0z"/%3E%3Cpath fill="%230000ff" d="M0 160h640v160H0z"/%3E%3Cpath fill="%23ff0000" d="M0 320h640v160H0z"/%3E%3C/svg%3E' },
    { name: 'Solomon Islands', code: '+677', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%230051ba" d="M0 0h640v480H0z"/%3E%3C/svg%3E' },
    { name: 'Somalia', code: '+252', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%234189dd" d="M0 0h640v480H0z"/%3E%3C/svg%3E' },
    { name: 'South Africa', code: '+27', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23007a4d" d="M0 0h640v480H0z"/%3E%3C/svg%3E' },
    { name: 'South Korea', code: '+82', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23fff" d="M0 0h640v480H0z"/%3E%3C/svg%3E' },
    { name: 'South Sudan', code: '+211', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23000" d="M0 0h640v160H0z"/%3E%3Cpath fill="%23fff" d="M0 160h640v160H0z"/%3E%3Cpath fill="%23078930" d="M0 320h640v160H0z"/%3E%3C/svg%3E' },
    { name: 'Spain', code: '+34', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23c60b1e" d="M0 0h640v120H0z"/%3E%3Cpath fill="%23ffc400" d="M0 120h640v240H0z"/%3E%3Cpath fill="%23c60b1e" d="M0 360h640v120H0z"/%3E%3C/svg%3E' },
    { name: 'Sri Lanka', code: '+94', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23ffb400" d="M0 0h640v480H0z"/%3E%3C/svg%3E' },
    { name: 'Sudan', code: '+249', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23ce1126" d="M0 0h640v160H0z"/%3E%3Cpath fill="%23fff" d="M0 160h640v160H0z"/%3E%3Cpath fill="%23000" d="M0 320h640v160H0z"/%3E%3C/svg%3E' },
    { name: 'Suriname', code: '+597', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23377e3f" d="M0 0h640v96H0z"/%3E%3Cpath fill="%23fff" d="M0 96h640v96H0z"/%3E%3Cpath fill="%23b40a2d" d="M0 192h640v96H0z"/%3E%3Cpath fill="%23fff" d="M0 288h640v96H0z"/%3E%3Cpath fill="%23377e3f" d="M0 384h640v96H0z"/%3E%3C/svg%3E' },
    { name: 'Sweden', code: '+46', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23006aa7" d="M0 0h640v480H0z"/%3E%3Cpath fill="%23fecc00" d="M0 192h640v96H0z"/%3E%3Cpath fill="%23fecc00" d="M176 0h96v480h-96z"/%3E%3C/svg%3E' },
    { name: 'Switzerland', code: '+41', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23d52b1e" d="M0 0h640v480H0z"/%3E%3C/svg%3E' },
    { name: 'Syria', code: '+963', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23ce1126" d="M0 0h640v160H0z"/%3E%3Cpath fill="%23fff" d="M0 160h640v160H0z"/%3E%3Cpath fill="%23000" d="M0 320h640v160H0z"/%3E%3C/svg%3E' },
    { name: 'Taiwan', code: '+886', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23fe0000" d="M0 0h640v480H0z"/%3E%3Cpath fill="%23000095" d="M0 0h320v240H0z"/%3E%3C/svg%3E' },
    { name: 'Tajikistan', code: '+992', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23ce1126" d="M0 0h640v160H0z"/%3E%3Cpath fill="%23fff" d="M0 160h640v160H0z"/%3E%3Cpath fill="%23006600" d="M0 320h640v160H0z"/%3E%3C/svg%3E' },
    { name: 'Tanzania', code: '+255', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%2300a859" d="M0 0h640v160H0z"/%3E%3Cpath fill="%231eb53a" d="M0 320h640v160H0z"/%3E%3Cpath fill="%2300a3dd" d="M0 0h640v480H0z"/%3E%3C/svg%3E' },
    { name: 'Thailand', code: '+66', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23a51931" d="M0 0h640v80H0z"/%3E%3Cpath fill="%23fff" d="M0 80h640v80H0z"/%3E%3Cpath fill="%232d2a4a" d="M0 160h640v160H0z"/%3E%3Cpath fill="%23fff" d="M0 320h640v80H0z"/%3E%3Cpath fill="%23a51931" d="M0 400h640v80H0z"/%3E%3C/svg%3E' },
    { name: 'Togo', code: '+228', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23006a4e" d="M0 0h640v96H0z"/%3E%3Cpath fill="%23ffd100" d="M0 96h640v96H0z"/%3E%3Cpath fill="%23006a4e" d="M0 192h640v96H0z"/%3E%3Cpath fill="%23ffd100" d="M0 288h640v96H0z"/%3E%3Cpath fill="%23006a4e" d="M0 384h640v96H0z"/%3E%3C/svg%3E' },
    { name: 'Tonga', code: '+676', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23c10000" d="M0 0h640v480H0z"/%3E%3C/svg%3E' },
    { name: 'Trinidad and Tobago', code: '+1-868', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23ce1126" d="M0 0h640v480H0z"/%3E%3C/svg%3E' },
    { name: 'Tunisia', code: '+216', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23e70013" d="M0 0h640v480H0z"/%3E%3C/svg%3E' },
    { name: 'Turkey', code: '+90', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23e30a17" d="M0 0h640v480H0z"/%3E%3C/svg%3E' },
    { name: 'Turkmenistan', code: '+993', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%231eb53a" d="M0 0h640v480H0z"/%3E%3C/svg%3E' },
    { name: 'Tuvalu', code: '+688', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%2341b8d5" d="M0 0h640v480H0z"/%3E%3C/svg%3E' },
    { name: 'Uganda', code: '+256', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23000" d="M0 0h640v80H0z"/%3E%3Cpath fill="%23fcdc04" d="M0 80h640v80H0z"/%3E%3Cpath fill="%23d90000" d="M0 160h640v80H0z"/%3E%3Cpath fill="%23000" d="M0 240h640v80H0z"/%3E%3Cpath fill="%23fcdc04" d="M0 320h640v80H0z"/%3E%3Cpath fill="%23d90000" d="M0 400h640v80H0z"/%3E%3C/svg%3E' },
    { name: 'Ukraine', code: '+380', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%230057b7" d="M0 0h640v240H0z"/%3E%3Cpath fill="%23ffd700" d="M0 240h640v240H0z"/%3E%3C/svg%3E' },
    { name: 'United Arab Emirates', code: '+971', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23009739" d="M0 0h640v160H0z"/%3E%3Cpath fill="%23fff" d="M0 160h640v160H0z"/%3E%3Cpath fill="%23000" d="M0 320h640v160H0z"/%3E%3Cpath fill="%23f00" d="M0 0h200v480H0z"/%3E%3C/svg%3E' },
    { name: 'United Kingdom', code: '+44', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23012169" d="M0 0h640v480H0z"/%3E%3Cpath fill="%23FFF" d="M75 0l244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0z"/%3E%3C/svg%3E' },
    { name: 'United States', code: '+1', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23b22234" d="M0 0h640v480H0z"/%3E%3Cpath stroke="%23fff" stroke-width="37" d="M0 55h640M0 129h640M0 203h640M0 277h640M0 351h640M0 425h640"/%3E%3Cpath fill="%233c3b6e" d="M0 0h364v258H0z"/%3E%3C/svg%3E' },
    { name: 'Uruguay', code: '+598', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23fff" d="M0 0h640v53.3H0z"/%3E%3Cpath fill="%230038a8" d="M0 53.3h640v53.4H0z"/%3E%3Cpath fill="%23fff" d="M0 106.7h640v53.3H0z"/%3E%3Cpath fill="%230038a8" d="M0 160h640v53.3H0z"/%3E%3Cpath fill="%23fff" d="M0 213.3h640v53.4H0z"/%3E%3Cpath fill="%230038a8" d="M0 266.7h640v53.3H0z"/%3E%3Cpath fill="%23fff" d="M0 320h640v53.3H0z"/%3E%3Cpath fill="%230038a8" d="M0 373.3h640v53.4H0z"/%3E%3Cpath fill="%23fff" d="M0 426.7h640v53.3H0z"/%3E%3C/svg%3E' },
    { name: 'Uzbekistan', code: '+998', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%231eb53a" d="M0 320h640v160H0z"/%3E%3Cpath fill="%23fff" d="M0 153.6h640v172.8H0z"/%3E%3Cpath fill="%230099b5" d="M0 0h640v153.6H0z"/%3E%3C/svg%3E' },
    { name: 'Vanuatu', code: '+678', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23009543" d="M0 240h640v240H0z"/%3E%3Cpath fill="%23d21034" d="M0 0h640v240H0z"/%3E%3C/svg%3E' },
    { name: 'Vatican City', code: '+379', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23ffd700" d="M320 0h320v480H320z"/%3E%3Cpath fill="%23fff" d="M0 0h320v480H0z"/%3E%3C/svg%3E' },
    { name: 'Venezuela', code: '+58', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23cf142b" d="M0 320h640v160H0z"/%3E%3Cpath fill="%23003893" d="M0 160h640v160H0z"/%3E%3Cpath fill="%23fcdd09" d="M0 0h640v160H0z"/%3E%3C/svg%3E' },
    { name: 'Vietnam', code: '+84', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23da251d" d="M0 0h640v480H0z"/%3E%3C/svg%3E' },
    { name: 'Yemen', code: '+967', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23ce1126" d="M0 0h640v160H0z"/%3E%3Cpath fill="%23fff" d="M0 160h640v160H0z"/%3E%3Cpath fill="%23000" d="M0 320h640v160H0z"/%3E%3C/svg%3E' },
    { name: 'Zambia', code: '+260', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23198a00" d="M0 0h640v480H0z"/%3E%3C/svg%3E' },
    { name: 'Zimbabwe', code: '+263', flag: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"%3E%3Cpath fill="%23006400" d="M0 0h640v68.6H0z"/%3E%3Cpath fill="%23fcd116" d="M0 68.6h640v68.6H0z"/%3E%3Cpath fill="%23de2110" d="M0 137.1h640v68.6H0z"/%3E%3Cpath fill="%23000" d="M0 205.7h640v68.6H0z"/%3E%3Cpath fill="%23fcd116" d="M0 274.3h640v68.6H0z"/%3E%3Cpath fill="%23006400" d="M0 342.9h640v68.6H0z"/%3E%3Cpath fill="%23de2110" d="M0 411.4h640V480H0z"/%3E%3Cpath fill="%23fff" d="M0 0l320 240L0 480z"/%3E%3C/svg%3E' }
];

// Store selected country code globally
let selectedCountry = countries.find(c => c.name === 'Bangladesh') || countries[0]; // Default to Bangladesh

// Populate country list
function populateCountryList(filterCountries = countries) {
    const countryList = document.getElementById('countryList');
    countryList.innerHTML = '';

    filterCountries.forEach(country => {
        const countryItem = document.createElement('div');
        countryItem.className = 'country-item';
        countryItem.innerHTML = `
            <img src="${country.flag}" alt="${country.name}" class="country-flag-small" onerror="this.style.display='none'">
            <span class="country-name">${country.name}</span>
            <span class="country-code-text">${country.code}</span>
        `;
        countryItem.onclick = () => selectCountry(country);
        countryList.appendChild(countryItem);
    });
}

// Select country
function selectCountry(country) {
    selectedCountry = country;
    document.getElementById('selectedFlag').src = country.flag;
    document.getElementById('selectedCode').textContent = country.code;
    document.getElementById('countryDropdown').style.display = 'none';
    document.getElementById('countrySearch').value = '';
    populateCountryList(); // Reset search filter
}

// Toggle dropdown
document.getElementById('countrySelector').addEventListener('click', (e) => {
    e.stopPropagation();
    const dropdown = document.getElementById('countryDropdown');
    dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
});

// Prevent dropdown from closing when clicking inside it
document.getElementById('countryDropdown').addEventListener('click', (e) => {
    e.stopPropagation();
});

// Search countries
document.getElementById('countrySearch').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();

    const filteredCountries = countries.filter(country =>
        country.name.toLowerCase().includes(searchTerm) ||
        country.code.includes(searchTerm)
    );

    populateCountryList(filteredCountries);
});

// Close dropdown when clicking outside
document.addEventListener('click', () => {
    document.getElementById('countryDropdown').style.display = 'none';
});

// Initialize countries on page load
populateCountryList();

// Main form submission handler
document.getElementById('userForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = document.getElementById('submitBtn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoader = submitBtn.querySelector('.btn-loader');
    const errorAlert = document.getElementById('errorAlert');

    // Get form data with country code
    const phoneNumber = document.getElementById('phone').value;
    const fullPhoneNumber = selectedCountry.code + phoneNumber;

    const formData = {
        email: document.getElementById('email').value,
        name: document.getElementById('name').value,
        phone: fullPhoneNumber,
        age: document.getElementById('age').value,
        gender: document.getElementById('gender').value,
        lifeThoughts: document.getElementById('lifeThoughts').value
    };

    // Disable button and show loader
    submitBtn.disabled = true;
    btnText.style.display = 'none';
    btnLoader.style.display = 'inline';
    errorAlert.style.display = 'none';

    try {
        // Send form data to backend
        const response = await fetch('http://localhost:3000/api/send-otp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();

        if (response.ok) {
            // Store email in sessionStorage for OTP page
            sessionStorage.setItem('userEmail', formData.email);
            sessionStorage.setItem('userName', formData.name);

            // Redirect to OTP page
            window.location.href = 'otp.html';
        } else {
            throw new Error(data.message || 'Failed to send OTP');
        }
    } catch (error) {
        console.error('Error:', error);
        errorAlert.textContent = error.message || 'Failed to send OTP. Please try again.';
        errorAlert.style.display = 'block';

        // Re-enable button
        submitBtn.disabled = false;
        btnText.style.display = 'inline';
        btnLoader.style.display = 'none';
    }
});

// Remove phone number formatting restriction - allow any number of digits
document.getElementById('phone').addEventListener('input', (e) => {
    // Only allow digits
    e.target.value = e.target.value.replace(/\D/g, '');
});

// Age validation
document.getElementById('age').addEventListener('input', (e) => {
    let value = parseInt(e.target.value);
    if (value < 1) e.target.value = 1;
    if (value > 120) e.target.value = 120;
});
