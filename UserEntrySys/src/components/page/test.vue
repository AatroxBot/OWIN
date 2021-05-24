<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item> <i class="el-icon-lx-cascades"></i> 用户管理 </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="handle-box">
                <el-button type="primary" icon="el-icon-lx-add" class="handle-del mr10" @click="addNewUser" v-if="operateVisible"
                    >新增用户</el-button
                >
                <el-input v-model="query.name" placeholder="用户名" class="handle-input mr10"></el-input>
                <el-select v-model="query.groupid" placeholder="请选择" class="handle-del mr10" :disabled="userGroupVisible">
                    <el-option v-for="item in searchOption" :key="item.id" :label="item.name" :value="item.id"> </el-option>
                </el-select>
                <el-button type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button>
            </div>
            <el-table
                :data="tableData"
                border
                class="table"
                ref="multipleTable"
                header-cell-class-name="table-header"
                @selection-change="handleSelectionChange"
            >
                <!-- <el-table-column type="selection" width="55" align="center"></el-table-column> -->
                <!-- <el-table-column prop="id" label="ID" width="55" align="center"></el-table-column> -->
                <el-table-column prop="UserName" label="用户名" :sortable="true"></el-table-column>
                <el-table-column label="管理员" align="center"  >
                    <template slot-scope="scope">
                        <el-tag :type="scope.row.SuperUser === true ? 'success' : 'false'">{{
                            scope.row.SuperUser === true ? '是' : '否'
                        }}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="GroupName" label="用户组"  :sortable="true"></el-table-column>