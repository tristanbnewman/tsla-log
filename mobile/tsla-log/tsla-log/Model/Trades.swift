//
//  Trades.swift
//  tsla-log
//
//  Created by Tristan Newman on 6/4/19.
//  Copyright © 2019 Tristan Newman. All rights reserved.
//

import Foundation

class Trades {
    
    var trade = Trade(price: 10.0, date: "1/1/1", period: 10)
    var trades : [Trade]
    
    init(){
        self.trades = [self.trade]
    }
}
