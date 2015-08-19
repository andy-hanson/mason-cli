"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","fs","mason-node-util/dist/compile-warn-and-throw","msl/dist/at/q","msl/dist/at/Map/Id-Map","msl/dist/at/Map/Map","msl/dist/Object","source-map-support"],(exports,fs_0,compile_45warn_45and_45throw_1,_63_2,Id_45Map_3,Map_4,Object_5,source_45map_45support_6)=>{
	const _$2=_ms.getModule(fs_0),readFileSync=_ms.get(_$2,"readFileSync"),realpathSync=_ms.get(_$2,"realpathSync"),compile_45warn_45and_45throw=_ms.getDefaultExport(compile_45warn_45and_45throw_1),_$4=_ms.getModule(_63_2),Some=_ms.get(_$4,"Some"),Id_45Map=_ms.getDefaultExport(Id_45Map_3),_$6=_ms.getModule(Map_4),assoc_33=_ms.get(_$6,"assoc!"),_63get=_ms.get(_$6,"?get"),_$7=_ms.getModule(Object_5),p_43_33=_ms.get(_$7,"p+!"),send_33=_ms.get(_$7,"send!"),_$8=_ms.getModule(source_45map_45support_6),install=_ms.get(_$8,"install"),retrieveSourceMap=_ms.get(_$8,"retrieveSourceMap");
	const source_45maps=new (Id_45Map)();
	const old_45retrieveSourceMap=retrieveSourceMap;
	install((()=>{
		const built={};
		const retrieveSourceMap=built.retrieveSourceMap=function retrieveSourceMap(source){
			return (()=>{
				const _=_63get(source_45maps,source);
				{
					const _$=_ms.extract(Some,_);
					if((_$!==null)){
						const _=_$[0];
						const built={};
						const url=built.url=null;
						const map=built.map=_;
						return built
					} else {
						return old_45retrieveSourceMap(source)
					}
				}
			})()
		};
		return built
	})());
	let compile_45options=null;
	const compile_45and_45register_45source_45map=function compile_45and_45register_45source_45map(ms_45src,in_45file_45path){
		const _$26=compile_45warn_45and_45throw(ms_45src,in_45file_45path,compile_45options),code=_$26.code,sourceMap=_$26.sourceMap;
		const full_45in_45path=realpathSync(in_45file_45path);
		assoc_33(source_45maps,full_45in_45path,sourceMap);
		return code
	};
	const evaluate=function evaluate(in_45file_45path,options){
		compile_45options=options;
		return require(realpathSync(in_45file_45path))
	};
	p_43_33(require.extensions,`.ms`,(new_45module,filename)=>{
		const ms=readFileSync(filename,`utf-8`);
		const code=compile_45and_45register_45source_45map(ms,filename);
		send_33(new_45module,`_compile`,code,filename)
	});
	const name=exports.name=`evaluate`;
	exports.default=evaluate;
	return exports
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21hc29uLWNsaS9zcmMvZXZhbHVhdGUubXMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztDQVNBLG9CQUFjLEtBQUk7Q0FFbEIsOEJBQXdCO0NBQ3hCLFFBQ08sS0FBQTs7RUFBTixnREFBb0IsMkJBQUEsT0FDTTtVQUFwQjtJQUFBLFFBQUEsT0FBSyxjQUFZO0lBQ3JCOzBCQUFDLEtBQUQ7b0JBQ087OztNQUFOLG9CQUFLO01BQ0wsb0JBQUs7O1lBRUY7YUFBSCx3QkFBc0I7S0FBQTtJQUFBO0dBQUE7RUFBQTs7O0NBRzFCLHNCQUFvQjtDQUVwQiw4Q0FBbUMsaURBQUEsU0FBTyxpQkFDWTtFQUFyRCxXQUFpQiw2QkFBdUIsU0FBTyxpQkFBYTtFQUM1RCx1QkFBZSxhQUFhO0VBQzVCLFNBQU8sY0FBWSxpQkFBYTtTQUNoQztDQUFBO0NBRUQsZUFBVyxrQkFBQSxpQkFBYSxRQUNPO29CQUFYO1NBQ25CLFFBQVMsYUFBYTtDQUFBO0NBRXZCLFFBQUksbUJBQW9CLE1BQU8sQ0FBQSxhQUFXLFdBQ1E7RUFBakQsU0FBSyxhQUFhLFNBQVU7RUFDNUIsV0FBTyx3Q0FBZ0MsR0FBRztFQUMxQyxRQUFNLGFBQVksV0FBVSxLQUFLO0NBQUE7Q0FyQ2xDLHdCQUFBO2lCQThCQSIsImZpbGUiOiJldmFsdWF0ZS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9