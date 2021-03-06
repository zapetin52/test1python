def install_and_load(package):
	try:
		import imp
		import subprocess
		subprocess.call(['pip', 'install', package])
		f, fname, desc = imp.find_module(package)
		return imp.load_module(package, f, fname, desc)	
	except Exception as e:
		return None